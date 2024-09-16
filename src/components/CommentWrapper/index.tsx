"use client";

import Divider from "@/components/Divider";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";
import User5 from "@/assets/users/user_5.png";
import CommentThreads from "@/components/CommentThreads";
import { useLocalStorageWithExpiry } from "@/hooks/useLocalStorageWithExpiry";
import { COMMENTS, CommentType } from "./comments";
import clsx from "clsx";

const CommentWrapper = () => {
  const [newComments, setNewComments] = useLocalStorageWithExpiry<
    CommentType[]
  >(
    "new_comments",
    [],
    20 * 60 * 1000 // 20 minutes expiry
  );

  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      name: "Anonymous",
      avatar: User5,
      timestamp: Date.now(),
      message: newComment,
    };

    setNewComments([...newComments, newCommentObj]);
    setNewComment("");
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewComment(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const allComments = [...COMMENTS, ...newComments];

  return (
    <section
      className={clsx(
        "relative w-[300px] max-h-[90vh] flex flex-col items-center overflow-hidden",
        "max-xl:w-full max-xl:flex-1 max-xl:border-none",
        "border border-dark-600 rounded-lg"
      )}
    >
      <h1 className="font-medium text-2xl mb-0 pt-4">Comments</h1>
      <Divider />
      <CommentThreads comments={allComments} />
      <div className="w-full p-4 absolute bottom-0 left-0">
        <div className="input input-bordered flex items-center gap-2 shadow-2xl">
          <input
            type="text"
            className="flex-grow"
            placeholder="Add a comment"
            value={newComment}
            onChange={handleCommentChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn btn-primary min-h-0 h-fit p-2"
            onClick={handleSubmit}
          >
            <IoMdSend />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentWrapper;
