import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContentArea from "../components/ContentArea";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <ContentArea />
      </div>
    </div>
  );
}

export default Dashboard;
