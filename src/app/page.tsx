"use client";

import Line from "./line";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black pt-40">
      <h1 className="font-bold text-7xl selection:bg-red-500 mb-10">
        RECHE SOARES
      </h1>
      <Line />
      <div className="w-full bg-white py-52">hello</div>
    </div>
  );
}
