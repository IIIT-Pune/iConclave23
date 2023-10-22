import { useState } from "react";
import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1); // Initial active day

  // Sample event schedule data for each day
  const eventSchedules = [
    [
      {
        time: "10:00 AM - 11:00 AM",
        event: "Opening Ceremony",
        // location: "CR 9",
      },
      {
        time: "11:00 PM - 1:30 PM",
        event: "cognition",
        // location: "CR 9",
      },
      {
        time: "1:00 PM - 5:30 PM",
        event: "off road bandits",
        // location: "COLLEGE ROOF",
      },
      {
        time: "11:00 AM - 5:30 PM",
        event: "frame flicks",
        // location: "CAMPUS",
      },
      {
        time: "2:00 PM - 6:00 PM",
        event: "lockout",
        // location: "CR 7, CR 8",
      },
      {
        time: "5:00 PM - 11:59 PM",
        event: "nexus",
        // location: "CR 3, CR 4",
      },
      {
        time: "5:30 PM - 21:30 PM",
        event: "nritya nova",
        // location: "AMPHI",
      },
    ],
    [
      {
        time: "00:00 AM - 11:59 PM",
        event: "nexus",
        // location: "CR 3, CR 4",
      },
      {
        time: "00:00 AM - 11:59 PM",
        event: "frame flicks",
        // location: "CAMPUS",
      },
      {
        time: "10:30 AM - 11:00 AM",
        event: "Aawaz-e-aawam",
        // location: "PARKING",
      },
      {
        time: "11:30 AM - 1:30 PM",
        event: "story quest R1",
        // location: "CR 7",
      },
      {
        time: "2:30 PM - 4:30 PM",
        event: "story quest r2",
        // location: "CR 7",
      },
      {
        time: "5:00 PM - 9:30 PM",
        event: "anuraag",
        // location: "AMPHI",
      },
    ],
    [
      {
        time: "00:00 AM - 6:00 AM",
        event: "nexus",
        // location: "CR 3, CR 4",
      },
      {
        time: "00:00 AM - 5:00 PM",
        event: "frame flicks",
        // location: "CAMPUS",
      },
      {
        time: "10:00 AM - 2:00 PM",
        event: "shipwreck",
        // location: "CR 10",
      },
      {
        time: "2:00 PM - 4:30 PM",
        event: "lockout",
        // location: "CR 7, CR 8",
      },
      {
        time: "5:00 PM - 7:00 PM",
        event: "closing ceremony",
        // location: "PARKING",
      },
      {
        time: "7:00 PM - 10:00 PM",
        event: "cultural night",
        // location: "PARKING",
      },
      // Add more events for Day 3 here
    ],
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "url(/images/longpost4.png), lightgray 50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      <div className="flex-grow flex flex-col py-6 justify-center">
        <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-youmurdererbb text-center">
          Event Schedule
        </h1>

        <div className=" text-white p-4 mx-auto mt-6 rounded-lg shadow-md">
          <div className="flex font-mrsmonster justify-evenly mb-16 space-x-4">
            {eventSchedules.map((_, index) => (
              <button
                key={index}
                className={`${
                  activeDay === index + 1
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } px-4 py-2 rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
                onClick={() => setActiveDay(index + 1)}
              >
                Day {index + 1}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto font-mrsmonster text-2xl">
            <table className="w-full table-auto">
              <thead className="font-Horrors text-gray-200">
                <tr>
                  <th className="px-4 pt-2 pb-4 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Event
                  </th>
                  <th className="px-4 pt-2 pb-4 lg:pb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    Time
                  </th>
                  {/* <th className="px-4 py-2">Location</th> */}
                </tr>
              </thead>
              <tbody>
                {eventSchedules[activeDay - 1].map((event, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 sm:px-6 sm:py-3 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 text-center">
                      {event.event}
                    </td>
                    <td className="py-2 sm:px-6 sm:py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-300 font-miso">
                      {event.time}
                    </td>
                    {/* <td className="px-4 py-2 sm:px-6 sm:py-3">
                    {event.location}
                  </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer textColor={"white"} />
    </div>
  );
};

export default Schedule;
