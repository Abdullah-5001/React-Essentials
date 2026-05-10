import React from "react";

function Examples({ title, description, code }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default Examples;
