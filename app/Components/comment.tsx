"use client";

import { useState } from "react";

function postComment(name: string, text: string) {
    console.log(name, text);
    
}

const CommentModal = () => {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const commentContent = (
        <div className={`relative p-4 overflow-hidden top-0 left-0 w-full flex flex-col text-md font-bold z-10 justify-left`}>
            <h1 className="px-2 py-1 text-left flex font-bold text-black bg-slate-200 rounded-xl">
                Leave a comment!
            </h1>
            <textarea
                title="Name"
                className="w-full h-20 p-2 mb-2 bg-slate-200 text-gray-700 rounded-xl resize-none"
                onChange={(e) => setName(e.target.value)}
                placeholder="Write your name here(optional)"
            />
            <textarea
                title="Comment"
                className="w-full h-20 p-2 bg-slate-200 text-gray-700 rounded-xl"
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment here..."
            />
            <button
                className="flex-grow p-2 m-2 bg-blue-600 text-black rounded-xl"
                onClick={() => postComment(name, comment)}
            >
                Submit
            </button>
        </div>
        )

  return (
    <div className="bg-slate-200 rounded-xl mx-10">
      {commentContent}
    </div>
  );
};

export default CommentModal;
