import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex items-center justify-between bg-blue-800 px-6 py-4 text-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 w-10" />
        <span className="text-xl font-bold">MyApp</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="text-sm font-medium">{currentTime}</div>

        <button className="relative focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C8.67 6.165 8 7.388 8 8.5V14l-1.405 1.405A2.032 2.032 0 016 17h9m6 0a2 2 0 01-2 2H5a2 2 0 01-2-2m13 2a2 2 0 11-4 0"
            />
          </svg>
          <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/26639/female-avatar-4-clipart-xl.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full border-2 border-gray-200 object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
