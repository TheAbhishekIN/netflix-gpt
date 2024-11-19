import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full h-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black py-2 px-4 rounded hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-400 text-white py-2 px-4 rounded opacity-60">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
