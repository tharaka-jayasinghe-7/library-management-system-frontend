import React from "react";

function Sidebar({ setSelectedContent }) {
  return (
    <div className="w-1/6 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <button
            className="w-full text-left"
            onClick={() => setSelectedContent("borrowings")}
          >
            Borrowings
          </button>
        </li>
        <li className="mb-2">
          <button
            className="w-full text-left"
            onClick={() => setSelectedContent("books")}
          >
            Books
          </button>
        </li>
        <li className="mb-2">
          <button
            className="w-full text-left"
            onClick={() => setSelectedContent("users")}
          >
            Users
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
