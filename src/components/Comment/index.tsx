import { useState, useEffect } from "react";
import { formatRelativeTime } from "@/app/utils/helpers";
import Image, { StaticImageData } from "next/image";
import ChatBubble from "../ChatBubble";

type CommentProps = {
  name: string;
  avatar: StaticImageData | string;
  timestamp: number;
  message: string[];
  currentTime: number;
};

const Comment = ({
  name,
  avatar,
  timestamp,
  message,
  currentTime,
}: CommentProps) => {
  const [relativeTime, setRelativeTime] = useState(() =>
    formatRelativeTime(timestamp, currentTime)
  );

  useEffect(() => {
    setRelativeTime(formatRelativeTime(timestamp, currentTime));
  }, [currentTime]);

  return (
    <div className="flex flex-col gap-2">
      <div id="comment-title" className="flex gap-4 items-center">
        <div className="avatar w-8 h-8">
          <Image className="rounded-full" src={avatar} alt="user" />
        </div>
        <div className="flex gap-2">
          <h4>{name}</h4>
          <p className="opacity-60">{relativeTime}</p>
        </div>
      </div>
      <ChatBubble.left>
        {message.map((line, index) => (
          <p key={index} className="whitespace-pre-wrap">
            {line}
          </p>
        ))}
      </ChatBubble.left>
    </div>
  );
};

export default Comment;
