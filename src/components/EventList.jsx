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
            <p className="mb-1">({event.date})</p>
            <h5 className="mb-1">
              Event name: <span className="text-gray-400">{event.name}</span>
            </h5>
            <p className="mb-1">
              Description:
              <span className="text-gray-400"> {event.description}</span>
            </p>
            <p className="mb-1">
              {event.startTime} to {event.endTime}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
