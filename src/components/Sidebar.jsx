import React from "react";

function Sidebar() {
  return (
    <div className="w-1/6 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2">
          <a href="#">borrowings</a>
        </li>
        <li className="mb-2">
          <a href="#">Books</a>
        </li>
        <li className="mb-2">
          <a href="#">Users</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
