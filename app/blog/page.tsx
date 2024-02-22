"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  // const [name, setName] = useState<any>(null);
  // const [body, setBody] = useState<any>(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://0.0.0.0:7000/posts");
  //       const jsonData = await response.json();
  //       const data = jsonData; //JSON.parse(jsonData);
  //       setName(data["1"][0]);
  //       setBody(data["1"][1]);
  //     } catch (error) {
  //       setName("error");
  //       setBody("error");
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className="relative top-[12em]  mx-auto mt-8 flex max-w-screen-lg bg-white p-4">
      <h2> {}</h2>
      <h4> {}</h4>
    </div>
  );
}
