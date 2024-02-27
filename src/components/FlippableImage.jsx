import React, { useState } from "react";
import ArrowIcon from "./ArrowIcon";

const FlippableImage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [clickedSide, setClickedSide] = useState(null);

  const handleSideHover = (side) => {
    setHoveredSide(side);
  };

  const handleSideHoverOut = () => {
    setHoveredSide(null);
  };

  const getImageStyles = () => {
    let transformStyle = "";

    switch (clickedSide) {
      case "left":
        transformStyle = "scaleX(-1) ";
        break;
      case "right":
        transformStyle = "scaleX(1) ";
        break;
      case "top":
        transformStyle = "scaleY(1)";
        break;
      case "bottom":
        transformStyle = "scaleY(-1)";
        break;
      default:
        break;
    }

    return {
      transform: transformStyle,
    };
  };

  return (
    <div className="grid-item">
      <div
        className="left"
        style={{
          opacity: hoveredSide === "left" ? 1 : 0,
        }}
        onMouseEnter={() => handleSideHover("left")}
        onMouseLeave={handleSideHoverOut}
        onClick={() => setClickedSide("left")}
      >
        <ArrowIcon direction="left" />
      </div>
      <div
        className="right"
        style={{
          opacity: hoveredSide === "right" ? 1 : 0,
        }}
        onMouseEnter={() => handleSideHover("right")}
        onMouseLeave={handleSideHoverOut}
        onClick={() => setClickedSide("right")}
      >
        <ArrowIcon direction="right" />
      </div>
      <div
        className="top"
        style={{
          opacity: hoveredSide === "top" ? 1 : 0,
        }}
        onMouseEnter={() => handleSideHover("top")}
        onMouseLeave={handleSideHoverOut}
        onClick={() => setClickedSide("top")}
      >
        <ArrowIcon direction="top" />
      </div>
      <div
        className="bottom"
        style={{
          opacity: hoveredSide === "bottom" ? 1 : 0,
        }}
        onMouseEnter={() => handleSideHover("bottom")}
        onMouseLeave={handleSideHoverOut}
        onClick={() => setClickedSide("bottom")}
      >
        <ArrowIcon direction="bottom" />
      </div>
      <img
        src="https://source.unsplash.com/random/200x200?sig=1"
        alt="random"
        style={getImageStyles()}
      />
    </div>
  );
};

export default FlippableImage;
