"use client";
import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [selectedChats, setSelectedChats] = useState<string[]>([]);

  const handleDelete = () => {
    console.log("Deleting chats:", selectedChats);
  };

  const handleArchive = () => {
    console.log("Archiving chats:", selectedChats);
  };

  return (
    <div className="p-4 bg-white shadow-md w-64 fixed top-0 right-0 h-full overflow-auto">
      <h1 className="text-xl font-bold mb-4">Message Manager</h1>
      <button
        onClick={handleDelete}
        className="mb-2 p-2 w-full bg-red-500 text-white rounded"
      >
        Delete Selected
      </button>
      <button
        onClick={handleArchive}
        className="p-2 w-full bg-blue-500 text-white rounded"
      >
        Archive Selected
      </button>
    </div>
  );
};

export default Sidebar;
