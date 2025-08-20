"use client";

import { Bell, Calendar, Menu } from "lucide-react";
 

interface HeaderProps {
  toggleCalendar: () => void;
}

export default function Header({ toggleCalendar }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="p-2 rounded-md hover:bg-gray-100 mr-4">
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleCalendar}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <Calendar size={20} />
        </button>

        <button
          className="p-2 rounded-md hover:bg-gray-100 opacity-50 cursor-not-allowed"
          disabled
        >
          <Bell size={20} />
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}
