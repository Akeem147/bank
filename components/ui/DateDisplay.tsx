// components/DateDisplay.tsx
"use client"

import React, { useEffect, useState } from "react";

const DateDisplay: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    // Get the current date and format it
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="text-center text-sm md:text-xl font-semibold text-gray-800">
      {currentDate}
    </div>
  );
};

export default DateDisplay;
