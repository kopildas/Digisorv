import React, { useState } from "react";
import splitStringUsingRegex from "../../utils/splitString";
// import splitStringUsingRegex from 'module'

export const FancyTextAnimation = () => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const getTransformStyles = (isMouseEntered, index) => ({
    transform : `translateY(${isMouseEntered ? "-100%" : "0%"})`,
    transitionDelay: `${index * 0.025}s`
  });

  return (
    <>
      <span
        className="text-blue-400 fancy-button cursor-grab"
        onMouseEnter={() => setIsMouseEntered(true)}
        onMouseLeave={() => setIsMouseEntered(false)}
      >
        <span className="fancy-text-container relative flex overflow-hidden">
          {splitStringUsingRegex("achieved").map((char, index) => (
            <span className="fancy-char-container relative" key={index}>
              <span style={getTransformStyles(isMouseEntered,index)}>{char}</span>
              <span style={getTransformStyles(isMouseEntered,index)}>{char}</span>
            </span>
          ))}
        </span>
      </span>
    </>
  );
};
