/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import LandingPageNav from "../components/LandingPageNav";

const UserDetails = ({ docId }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userDocRef = doc(db, "ticket", docId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        setUserDetails(userDocSnapshot.data());
      }
    };

    fetchUserDetails();
  }, [docId]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "url(/images/longpost4.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <LandingPageNav />
      {userDetails ? (
        <div
          className="flex flex-col justify-center items-center"
        >
          <div className="text-white text-3xl  bg-gray-600 bg-opacity-[0.35] p-8 rounded-3xl">
            <h2 className="text-center text-5xl font-miso">User Details</h2>
            <div className="flex justify-between py-5 font-miso text-4xl gap-10">
              <div className="">
                <h3>Name:</h3>
                <h3>College:</h3>
                <h3>Phone Number:</h3>
                <h3>Event:</h3>
              </div>
              <div className="">
                <p>{userDetails.name}</p>
                <p>{userDetails.college}</p>
                <p>{userDetails.phoneNumber}</p>
                <p>{userDetails.event}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>User details not found.</p>
      )}
    </div>
  );
};

export default UserDetails;
