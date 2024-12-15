import React from "react";

const EventList = ({ allEvents }) => {
  console.log(allEvents);

  return (
    <div>
      <ul>
        {allEvents.map((event, index) => (
          <li
            key={index}
            className="text-white mb-2 border bg-[#18181B] p-3 m-2"
          >
            <p>({event.date})</p>
            <h5>Event name: {event.name}</h5>
            <p>{event.description}</p>
            <p>
              {event.startTime} to {event.endTime}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
