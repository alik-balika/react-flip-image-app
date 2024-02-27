import React from "react";
import FlippableImage from "./FlippableImage";

const PageContent = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "20px",
      }}
    >
      <div className="grid">
        <FlippableImage />
        <FlippableImage />
        <FlippableImage />
        <FlippableImage />
      </div>
    </div>
  );
};

export default PageContent;
