import React from "react";

function TabButton({ children, onClick, className }) {
  return (
    <li>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
