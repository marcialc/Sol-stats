import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { formatTimestamp } from "@/app/utils/helpers";
import Comment from "@/components/Comment";
import { CommentType } from "@/containers/CommentSection/comments";

type CommentThreadsProps = {
  comments: CommentType[];
};

const CommentThreads = ({ comments }: CommentThreadsProps) => {
  const commentSectionRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(Date.now());

  const groupComments = useCallback(
    (
      comments: CommentType[]
    ): Array<Omit<CommentType, "message"> & { message: string[] }> => {
      const groupedComments: Array<
        Omit<CommentType, "message"> & { message: string[] }
      > = [];

      for (let i = 0; i < comments.length; i++) {
        const currentComment = comments[i];
        const previousComment = groupedComments[groupedComments.length - 1];

        if (
          previousComment &&
          previousComment.name === currentComment.name &&
          formatTimestamp(previousComment.timestamp) ===
            formatTimestamp(currentComment.timestamp)
        ) {
          previousComment.message.push(currentComment.message);
        } else {
          groupedComments.push({
            ...currentComment,
            message: [currentComment.message],
          });
        }
      }

      return groupedComments;
    },
    []
  );

  const groupedComments = useMemo(
    () => groupComments(comments),
    [comments, groupComments]
  );

  const scrollToBottom = () => {
    if (commentSectionRef.current) {
      commentSectionRef.current.scrollTop =
        commentSectionRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [comments]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={commentSectionRef}
      className="flex flex-col overflow-auto gap-4 p-4 pr-0.5 pb-20 max-h-[90vh]"
    >
      {groupedComments.map((comment, index) => (
        <div key={index}>
          <Comment
            name={comment.name}
            avatar={comment.avatar}
            timestamp={comment.timestamp}
            message={comment.message}
            currentTime={currentTime}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentThreads;
