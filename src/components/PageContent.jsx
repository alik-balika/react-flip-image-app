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
      <p style={{ fontSize: 20, paddingBottom: 10 }}>
        Mobile users please press on the sides of the images to flip them.
      </p>
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
