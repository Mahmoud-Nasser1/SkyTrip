"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-24 h-24">
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#38bdf8] border-r-[#8b5cf6] animate-spin"
          style={{ animationDuration: "2s" }}
        />
        <div
          className="absolute inset-2 rounded-full border-[3px] border-transparent border-b-[#fb923c] border-l-[#38bdf8] animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        />
        <div
          className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#8b5cf6] border-r-[#fb923c] animate-spin"
          style={{ animationDuration: "1s" }}
        />
        <div className="absolute inset-8 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#8b5cf6] blur-sm" />
      </div>
    </div>
  );
};

export default Loading;
