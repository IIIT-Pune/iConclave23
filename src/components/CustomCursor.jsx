import React, { useState, useEffect } from "react";
import "./App.css"; // Create a CSS file for custom cursor styles

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(-50);
  const [cursorY, setCursorY] = useState(-50);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursorX}px`,
        top: `${cursorY}px`,
      }}
    ></div>
  );
};

export default CustomCursor;
