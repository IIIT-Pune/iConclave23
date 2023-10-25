import { useRef, useState, useCallback, useEffect } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const TestTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
//   const [event, setEvent] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("Event 1"); // Default event
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [existingData, setExistingData] = useState([]);
  const [isDataAlreadyExists, setIsDataAlreadyExists] = useState(false);
  const [user] = useAuthState(auth);

  // Define the events
  const events = ["Spectators","Nexus", "Off-Road Bandits", "Lockout", "Nritya Nova", "Anuraag", "Aawaz - E - Aawam", "Frame Flicks", "Cognition", "ShipWreck", "Story Quest"];

  useEffect(() => {
    // Fetch existing data from Firebase only when user is signed in
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

  useEffect(() => {
    // Set the user's display name to the 'name' state when the user is available
    if (user && user.displayName) {
      setName(user.displayName);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      name,
      email,
      college,
      phoneNumber,
      event: selectedEvent, // Include the selected event
    };

    // Check if the new data already exists in the database
    const isDataAlreadyExists = existingData.some((record) => {
      return (
        record.name === newData.name &&
        record.email === newData.email &&
        record.college === newData.college &&
        record.phoneNumber === newData.phoneNumber &&
        record.event === newData.event
      );
    });

    if (isDataAlreadyExists) {
      setIsDataAlreadyExists(true);
    } else {
      // Save the data to Firebase
      const qrcoderef = collection(db, "ticket");
      await addDoc(qrcoderef, newData);

      // Set the QR code value
      const qrData = JSON.stringify(newData);
      setQRCodeValue(qrData);

      // Reset the form
      setName("");
      setEmail("");
      setCollege("");
      setPhoneNumber("");
      setIsDataAlreadyExists(false);
    }
  };

  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
        setName("");
        setEmail("");
        setCollege("");
        setPhoneNumber("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="lg:h-128 lg:w-128 bg-slate-500 p-5 text-white">
        <h2 className="text-3xl lg:text-5xl text-center">iConclave Ticket</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 my-10 mx-5"
        >
          <label htmlFor="name">Name</label>
          {user ? (
            <div className="flex justify-between">
              <p>{name}</p>
              <button onClick={handleSignOut}>Sign out</button>
            </div>
          ) : (
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
          )}
          <label htmlFor="college">College</label>
          <input
            className="text-xl text-black"
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className="text-xl text-black"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="event">Event</label>
          <select
          className="text-black"
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
            className="bg-black py-1 bg-opacity-70 hover:bg-opacity-100"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-center items-center flex-col">
          {qrCodeValue && (
            <>
              <div
                className="flex flex-col justify-center items-center bg-black rounded-2xl bg-opacity-75 p-5"
                ref={ref}
              >
                <QRCode
                  size={192}
                  value={qrCodeValue}
                  className="border-8 rounded-xl"
                />
                <h1 className="text-3xl bg-gray-400 text-black rounded-lg m-5 px-5 py-2">
                  Scan Me
                </h1>
              </div>
              <button
                onClick={onButtonClick}
                className="mt-2 px-5 py-2 bg-black bg-opacity-70 hover-bg-opacity-100"
              >
                Download QR Code
              </button>
            </>
          )}
          {isDataAlreadyExists && (
            <p className="text-red-600 mt-2">
              Data already exists in the database.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestTicket;
