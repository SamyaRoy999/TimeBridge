"use client";

import * as React from "react";
import { Calendar } from "./ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow bg-black"
      />
      {/* <p className="mt-4 text-white">
        Selected Date: {date ? date.toDateString() : "None"}
      </p> */}
    </>
  );
}
