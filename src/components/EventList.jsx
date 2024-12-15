import React, { useState } from "react";
import { Input } from "./ui/input";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button } from "./ui/button";

const EventList = ({ allEvents, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (index) => {
    setIsEditing(index);
    setEditData(allEvents[index]);
  };

  const handleSave = (index) => {
    onEdit(index, editData);
    setIsEditing(null);
  };

  return (
    <ul>
      {allEvents.map((event, index) => (
        <li key={index} className="text-white mb-2 border bg-[#18181B] p-3 m-2">
          {isEditing === index ? (
            <div>
              <Input
                type="text"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                placeholder="Event Name"
              />
              <textarea
                className="bg-[#18181B] border w-full mt-2"
                value={editData.description}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
                placeholder="Description"
              />
              <div className="">
                <Button variant="outline" onClick={() => handleSave(index)}>
                  Save
                </Button>
                <Button variant="outline" onClick={() => setIsEditing(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-1">({event.date})</p>
              <h5 className="mb-1">Event name: {event.name}</h5>
              <p className="mb-1">Description: {event.description}</p>
              <p className="mb-1">
                {event.startTime} to {event.endTime}
              </p>
              <div className="flex gap-4 mt-3">
                <Button
                  variant="outline"
                  onClick={() => handleEditClick(index)}
                >
                  <MdEdit /> Edit
                </Button>
                <Button variant="outline" onClick={() => onDelete(index)}>
                  <MdDelete className="text-red-700" /> Delete
                </Button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
