"use client";

import { useState } from "react";

async function postComment(name: string, text: string, num: number) {
    // console.log(`${process.env.ENDPOINTPOSTS}/${num}/comments/`);
    
    const res = await fetch(`http://0.0.0.0:7000/posts/${num}/comments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num, name, text }),
        mode: 'no-cors'
    });

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

}

type CommentProps = {
    postId: number;
};

const CommentModal = (props: CommentProps) => {

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handlePost = async () => {
        try {
          const ret = await postComment(name, comment, props.postId);
        } catch (error) {
            throw new Error(`Error posting comment: ${error}`);
      };
    }

    const commentContent = (
        <div className={`relative p-4 overflow-hidden top-0 left-0 w-full flex flex-col text-md font-bold z-10 justify-left`}>
            <h1 className="px-2 py-1 text-left flex font-bold text-black bg-slate-200 rounded-xl">
                Leave a comment!
            </h1>
            <textarea
                title="Name"
                className="w-full h-20 p-2 mb-2 bg-slate-200 text-gray-700 rounded-xl resize-none "
                rows={1}
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
                className="flex-grow p-2 m-2 z-[100] bg-blue-600 text-black rounded-xl"
                onClick={handlePost}
            >
                Submit
            </button>
        </div>
        )

  return (
    <div className="bg-slate-200 rounded-xl mx-10 mb-10">
      {commentContent}
    </div>
  );
};

export default CommentModal;
