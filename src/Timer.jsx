import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  const [date, setDate] = useState({
    day: new Date().getDate(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
      setDate({
        day: now.getDate(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center justify-start">
      <div className="flex space-x-2 ">
        <div className="p-2 bg-red-200 rounded-lg shadow-md text-sm font-bold">
          {String(date.day).padStart(2, "0")}
          <span className="text-xs font-thin">d</span>
        </div>
        <div className="p-2 bg-red-200 rounded-lg shadow-md text-sm font-bold">
          {String(time.hours).padStart(2, "0")}
          <span className="text-xs font-thin">h</span>
        </div>
        <div className="p-2 bg-red-200 rounded-lg shadow-md text-sm font-bold">
          {String(time.minutes).padStart(2, "0")}
          <span className="text-xs font-thin">m</span>
        </div>
        <div className="p-2 bg-red-200 rounded-lg shadow-md text-sm font-bold">
          {String(time.seconds).padStart(2, "0")}
          <span className="text-xs font-thin">s</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
