"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import CalendarDrawer from "./components/Sidebar/CalendarDrawer";

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header toggleCalendar={() => setIsCalendarOpen(true)} />
      <main className="flex-1">
        <Dashboard />
      </main>

      <CalendarDrawer
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </div>
  );
}
