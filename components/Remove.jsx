"use client";

import { HiOutlineTrash } from "react-icons/hi";

export default function Remove({ id }) {
  const removeTask = async () => {
    // Rename variable to avoid conflict with window.confirm
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    
    if (isConfirmed) {
      await fetch(`http://localhost:3000/api/task/?id=${id}`, {
        method: 'DELETE',
      });
      
      // Optionally, refresh the page or handle state to remove the task from the UI
      window.location.reload(); // If you want to reload the page after deletion
    }
  };

  return (
    <button onClick={removeTask} className="text-red-400 font-bold p-2">
      <HiOutlineTrash size={24} />
    </button>
  );
}
