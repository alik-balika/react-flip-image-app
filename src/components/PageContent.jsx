import React, { useState, useEffect } from "react";
import FlippableImage from "./FlippableImage";

const PageContent = () => {
  const [imageFile, setImageFile] = useState(
    "https://source.unsplash.com/random/200x200?sig=1"
  );

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "20px",
      }}
    >
      {isMobile && (
        <p style={{ fontSize: 20, paddingBottom: 10 }}>
          Mobile users please press on the sides of the images to flip them.
        </p>
      )}
      <div
        style={{
          paddingBottom: 10,
        }}
      >
        <label htmlFor="imageFile">Please enter an image: </label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <div className="grid">
        <FlippableImage imageFile={imageFile} />
        <FlippableImage imageFile={imageFile} />
        <FlippableImage imageFile={imageFile} />
        <FlippableImage imageFile={imageFile} />
      </div>
    </div>
  );
};

export default PageContent;
