"use client";
import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>("Newest");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const items = ["Newest", "Option 2", "Option 3"];

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedItem ? selectedItem : "Select"}{" "}
        {/* Display currently selected item or 'Select' if no item is selected */}
      </button>
      {isOpen && (
        <div
          className="dropdown-menu absolute right-0 z-50 flex flex-col overflow-hidden rounded-2xl"
          style={{ marginBottom: "5px", marginTop: "10px" }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              className="dropdown-item bg-slate-200 p-3"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
