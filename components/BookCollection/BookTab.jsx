import React, { useState } from "react";

const BookTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="mx-auto">
      <div className="flex border-b border-gray-300">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? "border-b-2 border-white-500"
                : ""
            } flex items-center px-4 gap-3 text-white font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            <div className="flex items-center">
              <span>{child.props.title}</span>
              {child.props.counter && (
                <span
                  className={`ml-2 px-3 py-1 text-gray-800 rounded-full ${
                    activeTab === child.props.label
                      ? "bg-slate-100"
                      : "bg-[#1C1C1D] text-gray-100"
                  }`}
                >
                  {child.props.counter}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const BookTab = ({ label, children }) => {
  return (
    <>
      <div label={label} className="w-full">
        {children}
      </div>
    </>
  );
};

export { BookTabs, BookTab };
