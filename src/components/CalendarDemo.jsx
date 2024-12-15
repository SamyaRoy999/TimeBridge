import * as React from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState } from "react";

export function CalendarDemo({ sendDataToModal }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventFormRef = useRef({
    name: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  // set the selected date
  const openModal = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  // Close reset the form data
  const closeModal = () => {
    setSelectedDate(null);
    setIsModalOpen(false);
    eventFormRef.current = {
      name: "",
      startTime: "",
      endTime: "",
      description: "",
    };
  };

  const addEvent = () => {
    if (
      !eventFormRef.current.name ||
      !eventFormRef.current.startTime ||
      !eventFormRef.current.endTime
    ) {
      alert("Event name and time fields are required!");
      return;
    }

    const newEvent = {
      ...eventFormRef.current,
      date: selectedDate?.toDateString(),
    };
    sendDataToModal(newEvent);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Calendar Component */}
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => openModal(date)}
        className="rounded-md border shadow bg-black"
      />
      {/* Modal */}
      {isModalOpen && (
        <div>
          <Card className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#101012] rounded-lg p-8 w-1/2 border">
              <h2 className="text-lg font-bold mb-4">
                {selectedDate?.toDateString()}
              </h2>
              {/* Event Name */}
              <label>Event Name</label>
              <Input
                type="text"
                placeholder="Enter event name"
                onChange={(e) => (eventFormRef.current.name = e.target.value)}
                className="border p-2 mb-2 w-full bg-[#18181B]"
              />
              {/* Start Time */}
              <label>Start Time</label>
              <Input
                type="time"
                onChange={(e) =>
                  (eventFormRef.current.startTime = e.target.value)
                }
                className="border p-2 mb-5 w-full bg-[#18181B]"
              />
              {/* End Time */}
              <label>End Time</label>
              <Input
                type="time"
                onChange={(e) =>
                  (eventFormRef.current.endTime = e.target.value)
                }
                className="border p-2 mb-5 w-full bg-[#18181B]"
              />
              {/* Description */}
              <label>Description</label>
              <textarea
                placeholder="Enter event description"
                onChange={(e) =>
                  (eventFormRef.current.description = e.target.value)
                }
                className="border p-2 mb-5 w-full bg-[#18181B]"
              />
              {/* Modal Buttons */}
              <div className="flex justify-end space-x-4">
                <Button variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
                <Button variant="outline" onClick={addEvent}>
                  Add Event
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
