import "./App.css";
import { CalendarDemo } from "./components/CalendarDemo";

function App() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4">
        <CalendarDemo />
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
