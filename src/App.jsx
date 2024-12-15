import { useState } from "react";
import "./App.css";
import { CalendarDemo } from "./components/CalendarDemo";
import { Card } from "@/components/ui/card";

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
      <Card className="h-[90vh] col-span-2 m-8">
        <h3 className="text-white font-bold mb-4">Event List</h3>
      </Card>
    </div>
  );
}

export default App;
