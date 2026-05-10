import React from "react";
import reactCoreConcepts from "../assets/react-core-concepts.png";
function Header() {
  const content = ["Fundamentals", "Core", "Essentials"];
  const randomIndex = Math.floor(Math.random() * content.length);
  const randomContent = content[randomIndex];
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };
  return (
    <header>
      <img src={reactCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomContent} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
