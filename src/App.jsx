import React, { useEffect, useState } from "react";
import "./App.css";
import { CalendarDemo } from "./components/CalendarDemo";
import { Card } from "@/components/ui/card";
import EventList from "./components/EventList";

function App() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const storedEvents = loadEventsFromLocalStorage();
    if (storedEvents.length > 0) {
      setAllEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    saveEventsToLocalStorage(allEvents);
  }, [allEvents]);

  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem("events", JSON.stringify(events));
  };

  const loadEventsFromLocalStorage = () => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  };

  const getDataToModal = (data) => {
    if (data.name && data.startTime && data.endTime) {
      setAllEvents((prev) => [...prev, data]);
    }
  };

  const editEvent = (index, updatedEvent) => {
    setAllEvents((prevEvents) => {
      const newEvents = [...prevEvents];
      newEvents[index] = updatedEvent;
      return newEvents;
    });
  };

  const deleteEvent = (index) => {
    setAllEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Left side calendar */}
      <div className="col-span-4 flex justify-center items-center">
        <Card className="lg:p-32 bg-[#18181B] h-[90vh]">
          <CalendarDemo sendDataToModal={getDataToModal} />
        </Card>
      </div>
      {/* Right side event list */}
      <Card className="h-[90vh] col-span-2 m-8 overflow-y-auto">
        <h3 className="text-white font-bold my-4 text-center">Event List</h3>
        <EventList
          allEvents={allEvents}
          onEdit={editEvent}
          onDelete={deleteEvent}
        />
      </Card>
    </div>
  );
}

export default App;
