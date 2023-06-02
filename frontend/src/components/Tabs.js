import React, { useState } from "react";
import Tab from "./Tab";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.title);

  const handleTabClick = (tabTitle) => {
    setActiveTab(tabTitle);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {children.map((child) => (
          <Tab
            key={child.props.title}
            title={child.props.title}
            isActive={child.props.title === activeTab}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div className="tab-content">
        {children.find((child) => child.props.title === activeTab)}
      </div>
    </div>
  );
};

export default Tabs;
