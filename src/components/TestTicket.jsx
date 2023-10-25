/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useCallback, useEffect } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const TestTicket = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("Spectators");
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [existingData, setExistingData] = useState([]);
  const [isDataAlreadyExists, setIsDataAlreadyExists] = useState(false);
  const [user] = useAuthState(auth);

  // Define the events
  const events = [
    "Spectators",
    "Nexus",
    "Off-Road Bandits",
    "Lockout",
    "Nritya Nova",
    "Anuraag",
    "Aawaz - E - Aawam",
    "Frame Flicks",
    "Cognition",
    "ShipWreck",
    "Story Quest",
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const qrcoderef = collection(db, "ticket");
        const querySnapshot = await getDocs(qrcoderef);
        const data = [];

        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        setExistingData(data);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const validateForm = () => {
    // Initialize an object to store validation errors
    const errors = {};

    // Name validation
    if (name.trim() === "") {
      errors.name = "Name is required";
    }

    // College validation
    if (college.trim() === "") {
      errors.college = "College is required";
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/; // Change this regex as needed
    if (!phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }

    // Check if the new data already exists in the database
    const newData = {
      name,
      college,
      phoneNumber,
      event: selectedEvent,
    };

    const isDataAlreadyExists = existingData.some((record) => {
      return (
        record.name === newData.name &&
        record.college === newData.college &&
        record.phoneNumber === newData.phoneNumber &&
        record.event === newData.event
      );
    });

    if (isDataAlreadyExists) {
      errors.exists = "Data already exists in the database";
    }

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      return { isValid: true, errors: {} };
    } else {
      return { isValid: false, errors };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateForm();

    if (!isValid) {
      setIsDataAlreadyExists(false);
      alert(
        "Please fix the following errors:\n" + Object.values(errors).join("\n")
      );
      return;
    }

    const newData = {
      name,
      college,
      phoneNumber,
      event: selectedEvent,
    };

    const qrcoderef = collection(db, "ticket");
    const docRef = await addDoc(qrcoderef, newData);
    const addedDocSnapshot = await getDoc(docRef);
    const qrData = `https://iconclave.iiitp.ac.in/showuser/${addedDocSnapshot.id}`;
    setQRCodeValue(qrData);
    setName("");
    setCollege("");
    setPhoneNumber("");
    setIsDataAlreadyExists(false);

  };

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `iConclave-ticket-${selectedEvent}.png`;
        link.href = dataUrl;
        link.click();
        setName("");
        setCollege("");
        setPhoneNumber("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="flex justify-center items-center my-8">
      <div className="bg-gray-600 bg-opacity-[0.35] p-8 rounded-3xl text-white">
        <h2 className="text-5xl text-gray-200 text-center font-miso">
          iConclave Ticket
        </h2>
        <div className="flex flex-col md:flex-row gap-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 my-10 mx-5"
          >
            <label htmlFor="name">Name</label>
            <input
              className="text-base text-black py-1 pl-2 rounded-md"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {user ? (
              <div className="flex items-center gap-4 justify-between">
                <p>{name}</p>
              </div>
            ) : null}
            <label htmlFor="college">College</label>
            <input
              className="text-base text-black py-1 pl-2 rounded-md"
              type="text"
              placeholder="College"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              className="text-base text-black py-1 pl-2 rounded-md"
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
            />
            <label htmlFor="event">Event</label>
            <select
              className="text-base text-black py-1 pl-2 rounded-md"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
            >
              {events.map((event) => (
                <option key={event} value={event}>
                  {event}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="mt-5 px-5 py-2 bg-gray-400 bg-opacity-[0.4] uppercase rounded-lg hover:bg-red-500"
            >
              Submit
            </button>
          </form>
          {qrCodeValue && (
            <>
              <div className="flex justify-between items-center flex-col my-10 mx-5">
                {qrCodeValue && (
                  <>
                    <div
                      className="flex flex-col justify-center items-center bg-black rounded-2xl bg-opacity-[0.3] p-5"
                      ref={ref}
                    >
                      <h1 className="text-3xl text-white bg-opacity-[0.3] font-miso uppercase rounded-lg mb-2 px-5 py-2">
                        iConclave 23
                      </h1>
                      <QRCode
                        size={192}
                        value={qrCodeValue}
                        className="border-8 rounded-xl"
                      />
                      <h1 className="text-3xl bg-gray-200 bg-opacity-[0.3] font-miso uppercase text-black rounded-lg mt-5 px-5 py-2">
                        {selectedEvent}
                      </h1>
                    </div>
                    <button
                      onClick={onButtonClick}
                      className="mt-4 px-5 py-2 bg-gray-400 bg-opacity-[0.3] uppercase rounded-lg hover-bg-red-500"
                    >
                      Download QR Code
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
        {isDataAlreadyExists && (
          <p className="text-red-600 text-center mt-2">
            Data already exists in the database.
          </p>
        )}
      </div>
    </div>
  );
};

export default TestTicket;
