import React from "react";

const TestImage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Testing Image</h1>
      <img
        src="/bivek/bivek.jpg"
        alt="Profile"
        style={{ width: "200px", height: "200px", border: "2px solid red" }}
      />
    </div>
  );
};

export default TestImage;
