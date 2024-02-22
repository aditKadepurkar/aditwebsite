"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type post = {
  num: number;
};

function Home() {
  // const [fetchedPosts, setFetchedPosts] = useState([]);

  // useEffect(() => {
  //   // Update the state with the fetched posts
  //   setFetchedPosts(posts);
  // }, [posts]);
  return (
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg bg-white p-4">
      <h2> {}</h2>
      <h4> {}</h4>
    </div>
  );
}

export default Home;
