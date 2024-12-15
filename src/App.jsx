import { useEffect, useState } from "react";
import "./App.css";
import { CalendarDemo } from "./components/CalendarDemo";
import { Card } from "@/components/ui/card";
import EventList from "./components/EventList";

function App() {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    const storedEvents = loadEventsFromLocalStorage();
    if (storedEvents && storedEvents.length > 0) {
      setAllEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    saveEventsToLocalStorage(allEvents);
  }, [allEvents]);

  const saveEventsToLocalStorage = (events) => {
    try {
      localStorage.setItem("events", JSON.stringify(events));
    } catch (error) {
      console.error("Error saving events to localStorage:", error);
    }
  };

  const loadEventsFromLocalStorage = () => {
    try {
      const storedEvents = localStorage.getItem("events");
      return storedEvents ? JSON.parse(storedEvents) : [];
    } catch (error) {
      console.error("Error loading events from localStorage:", error);
      return [];
    }
  };

  const getDataToModal = (data) => {
    if (data.name && data.startTime && data.endTime) {
      setAllEvents((prevEvents) => [...prevEvents, data]);
    }
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
        <EventList allEvents={allEvents} />
      </Card>
    </div>
  );
}

export default App;
