"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentDateTime(now.toLocaleString("en-US", options));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-black/85 text-white/70 shadow-lg ring-offset-emerald-800">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Current Date and Time */}
        <div className="text-lg font-medium text-emerald-300 animate-pulse">
          {currentDateTime}
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white/75 hover:text-emerald-400 transition duration-300 transform hover:scale-105"
              aria-label={`Navigate to ${item.name}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
