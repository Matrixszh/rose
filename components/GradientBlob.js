import React from "react";

const GradientBlob = () => {
    return (
      <div
        className="w-[127px] h-[118px] bg-[#b2ffc3] rounded-full blur-[210px]"
        style={{
          top: 50,
          left: 40,
          zIndex: -1, // make sure the blobs are behind other content
        }}
      />
    );
  };
  export default GradientBlob;