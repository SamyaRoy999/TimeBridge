import * as React from "react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error("Event name, start time, and end time are required!");
      return;
    }

    const newEvent = {
      ...eventFormRef.current,
      date: selectedDate?.toDateString(),
    };
    sendDataToModal(newEvent);
    toast.success("Event added successfully!", {
      onClose: () => closeModal(), // Toast বন্ধ হলে Modalও বন্ধ হবে
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <ToastContainer />

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
              <label>Event Name</label>
              <Input
                type="text"
                placeholder="Enter event name"
                onChange={(e) => (eventFormRef.current.name = e.target.value)}
                className="border p-2 mb-2 w-full bg-[#18181B]"
              />
              <label>Start Time</label>
              <Input
                type="time"
                onChange={(e) =>
                  (eventFormRef.current.startTime = e.target.value)
                }
                className="border p-2 mb-5 w-full bg-[#18181B]"
              />
              <label>End Time</label>
              <Input
                type="time"
                onChange={(e) =>
                  (eventFormRef.current.endTime = e.target.value)
                }
                className="border p-2 mb-5 w-full bg-[#18181B]"
              />
              <label>Description</label>
              <textarea
                placeholder="Enter event description"
                onChange={(e) =>
                  (eventFormRef.current.description = e.target.value)
                }
                className="border p-2 mb-5 w-full bg-[#18181B]"
              />
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
