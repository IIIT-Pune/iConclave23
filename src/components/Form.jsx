import { useRef, useState, useCallback, useEffect } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import GoogleAuth from "./GoogleAuth";

const Form = () => {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");
  const [existingData, setExistingData] = useState([]);
  const [isDataAlreadyExists, setIsDataAlreadyExists] = useState(false);

  useEffect(() => {
    // Fetch existing data from Firebase
    const fetchData = async () => {
      const qrcoderef = collection(db, "ticket");
      const querySnapshot = await getDocs(qrcoderef);
      const data = [];

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setExistingData(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      name,
      college,
      phoneNumber,
    };

    // Check if the new data already exists in the database
    const isDataAlreadyExists = existingData.some((record) => {
      return (
        record.name === newData.name &&
        record.college === newData.college &&
        record.phoneNumber === newData.phoneNumber
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
        setCollege("");
        setPhoneNumber("");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className="lg:h-128 lg:w-128 bg-slate-500 p-5 text-white">
        <h2 className="text-3xl lg:text-5xl text-center">QR Code Generator</h2>
        <GoogleAuth />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 my-10 mx-5"
        >
          <label htmlFor="name">Name</label>
          <input
            className="text-xl text-black"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

export default Form;
