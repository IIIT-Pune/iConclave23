/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import LandingPageNav from "../components/LandingPageNav";
import Footer from "../components/Footer";

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
        <div className="flex flex-col justify-center flex-grow my-8 items-center">
          <div className="text-white text-3xl bg-gray-600 bg-opacity-[0.35] p-6 sm:p-8 mx-4 rounded-3xl">
            <h2 className="text-center text-4xl md:text-5xl rounded-xl bg-gray-400 bg-opacity-[0.25] py-2 text-gray-200 font-miso">
              User Details
            </h2>
            <div className="flex justify-between pt-2 sm:pt-5 font-miso text-3xl sm:text-4xl gap-10">
              <table>
                <tr className="text-center">
                  <td>
                    <div className="p-4">Name:</div>
                  </td>
                  <td>
                    <div className="p-4 text-gray-400">{userDetails.name}</div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <div className="p-4">College:</div>
                  </td>
                  <td>
                    <div className="p-4 text-gray-400">
                      {userDetails.college}
                    </div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <div className="p-4">Phone:</div>
                  </td>
                  <td>
                    <div className="p-4 text-gray-400">
                      {userDetails.phoneNumber}
                    </div>
                  </td>
                </tr>
                <tr className="text-center">
                  <td>
                    <div className="p-4">Event:</div>
                  </td>
                  <td>
                    <div className="p-4 text-gray-400">{userDetails.event}</div>
                  </td>
                </tr>
              </table>

              {/* <div className="flex flex-col justify-center">
                <div className="flex justify-between">
                  <h3>Name:</h3>
                  <p>{userDetails.name}</p>
                </div>
                <div className="flex justify-between">
                  <h3>College:</h3>
                  <p>{userDetails.college}</p>
                </div>
                <div className="flex justify-between">
                  <h3>Phone No.:</h3>
                  <p>{userDetails.phoneNumber}</p>
                </div>
                <div className="flex justify-between">
                  <h3>Event:</h3>
                  <p>{userDetails.event}</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <p>User details not found.</p>
      )}
      <Footer textColor={"white"} />
    </div>
  );
};

export default UserDetails;
