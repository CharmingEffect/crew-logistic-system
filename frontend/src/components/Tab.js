import React from "react";

const Tab = ({ title, isActive, onClick }) => {
  const handleClick = () => {
    onClick(title);
  };

  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Tab;
