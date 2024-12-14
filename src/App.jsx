import "./App.css";
import { CalendarDemo } from "./components/CalendarDemo";

import { Card } from "@/components/ui/card";

function App() {
  return (
    <div className="grid grid-cols-6 h-screen ">
      <div className="col-span-4 flex  justify-center items-center">
        <Card className="lg:p-32 bg-[#18181B]">
          <CalendarDemo />
        </Card>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}

export default App;
