import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Borrowings from "../components/Borrowings";
import Books from "../components/Books";
import Users from "../components/Users";

function Dashboard() {
  const [selectedContent, setSelectedContent] = useState("borrowings");

  const renderContent = () => {
    switch (selectedContent) {
      case "borrowings":
        return <Borrowings />;
      case "books":
        return <Books />;
      case "users":
        return <Users />;
      default:
        return <Borrowings />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar setSelectedContent={setSelectedContent} />

        {/* Content */}
        <div className="flex-1 p-4">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
