import { useState } from "react";
import LandingPageNav from "../components/LandingPageNav";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1); // Initial active day

  // Sample event schedule data for each day
  const eventSchedules = [
    [
      {
        time: "10:00 AM - 11:30 AM",
        event: "Opening Ceremony",
        location: "Main Stage",
      },
      {
        time: "12:00 PM - 1:30 PM",
        event: "Workshop: Topic 1",
        location: "Room A",
      },
      {
        time: "2:00 PM - 3:30 PM",
        event: "Panel Discussion: Topic 2",
        location: "Room B",
      },
      // Add more events for Day 1 here
    ],
    [
      {
        time: "9:30 AM - 11:00 AM",
        event: "Morning Session",
        location: "Main Stage",
      },
      {
        time: "12:30 PM - 2:00 PM",
        event: "Workshop: Topic 3",
        location: "Room A",
      },
      {
        time: "3:30 PM - 5:00 PM",
        event: "Panel Discussion: Topic 4",
        location: "Room B",
      },
      // Add more events for Day 2 here
    ],
    [
      {
        time: "11:00 AM - 12:30 PM",
        event: "Workshop: Topic 5",
        location: "Room A",
      },
      {
        time: "1:30 PM - 3:00 PM",
        event: "Closing Ceremony",
        location: "Main Stage",
      },
      // Add more events for Day 3 here
    ],
  ];

  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background: "url(/images/longpost3.png)",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <h1 className="text-white text-6xl font-Horrors text-center">Schedule</h1>

      <div className=" text-white p-4 mx-auto mt-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4 space-x-4">
          {eventSchedules.map((_, index) => (
            <button
              key={index}
              className={`${
                activeDay === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } px-4 py-2 rounded-md`}
              onClick={() => setActiveDay(index + 1)}
            >
              Day {index + 1}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Location</th>
              </tr>
            </thead>
            <tbody>
              {eventSchedules[activeDay - 1].map((event, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 sm:px-6 sm:py-3">{event.time}</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-3">{event.event}</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-3">
                    {event.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
