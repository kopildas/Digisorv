import React, { useState, useEffect } from "react";

function RoundScrolling() {
  const generateLetters = () => {
    const text = "Your Circular Text Here";
    const letters = text.split('');
    return letters.map((letter, index) => (
      <div className="letter" key={index}>
        {letter}
      </div>
    ));
  };

  return (
    <div className="circular-text-container">
      {generateLetters()}
    </div>
  );
};

export default RoundScrolling;
