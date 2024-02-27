import React from "react";

const PageContent = () => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        padding: "20px",
      }}
    >
      <div className="grid">
        <div className="grid-item">
          <img src="https://source.unsplash.com/random/200x200?sig=1" />
        </div>
        <div className="grid-item">
          <img src="https://source.unsplash.com/random/200x200?sig=1" />
        </div>
        <div className="grid-item">
          <img src="https://source.unsplash.com/random/200x200?sig=1" />
        </div>
        <div className="grid-item">
          <img src="https://source.unsplash.com/random/200x200?sig=1" />
        </div>
      </div>
    </div>
  );
};

export default PageContent;
