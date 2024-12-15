import { useState } from "react";
import "./App.css";
import { CalendarDemo } from "./components/CalendarDemo";
import { Card } from "@/components/ui/card";
import EventList from "./components/EventList";

function App() {
  const [allEvents, setAllEvents] = useState([]);

  //  receive event data from CalendarDemo
  const getDataToModal = (data) => {
    setAllEvents((prevEvents) => [...prevEvents, data]);
  };

  console.log("All Events:", allEvents);

  return (
    <div className="grid grid-cols-6 h-screen">
      {/* Left Section: Calendar */}
      <div className="col-span-4 flex justify-center items-center">
        <Card className="lg:p-32 bg-[#18181B] h-[90vh]">
          <CalendarDemo sendDataToModal={getDataToModal} />
        </Card>
      </div>
      {/* Right Section: Event List */}
      <Card className="h-[90vh] col-span-2 m-8 overflow-y-auto">
        <h3 className="text-white font-bold my-4 text-center">Event List</h3>
        <EventList allEvents={allEvents} />
      </Card>
    </div>
  );
}

export default App;
