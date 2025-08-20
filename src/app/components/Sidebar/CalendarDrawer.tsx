"use client";

// import { X } from 'lucide-react';
import { IoClose } from "react-icons/io5";

interface CalendarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarDrawer({
  isOpen,
  onClose,
}: CalendarDrawerProps) {
  if (!isOpen) return null;

  const days = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
  ];

  const weekdays = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full bg-white shadow-xl">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Calendar</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoClose size={20} />
            </button>
          </div>

          <div className="p-4 overflow-y-auto">
            <h3 className="text-lg font-medium mb-4">November 2023</h3>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekdays.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-gray-500 py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {days.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-cols-7 gap-1 mb-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`text-center py-2 text-sm ${
                      day === 1 ? "font-semibold" : ""
                    } ${
                      weekIndex === 0 && day > 28
                        ? "text-gray-400"
                        : weekIndex === 4 && day < 5
                        ? "text-gray-400"
                        : weekIndex === 5 || weekIndex === 6
                        ? "text-gray-400"
                        : "text-gray-900"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
