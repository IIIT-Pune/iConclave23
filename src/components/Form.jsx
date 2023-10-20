// src/components/Form.js
import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, setCollege] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save the data to Firebase
    const ticketref = collection(db, "ticket");
    await addDoc( ticketref, {
      name,
      phoneNumber,
      college,
    });

    // Reset the form
    setName("");
    setPhoneNumber("");
    setCollege("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="h-128 w-128 bg-slate-500 p-5 text-white">
        <h2 className="text-5xl text-center">Ticket</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 my-10 mx-5">
            <label htmlFor="name">Name</label>
          <input
            className="p-2 text-xl text-black"
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="phoneno">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            name="phoneno"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="college">College</label>
          <input
            type="text"
            placeholder="College"
            value={college}
            name="college"
            onChange={(e) => setCollege(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
