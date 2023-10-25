// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCzzQ10mmN1qhcUsrY_Zf5dVkMqTIAaGfs",
//   authDomain: "iconclaveticket-2e857.firebaseapp.com",
//   projectId: "iconclaveticket-2e857",
//   storageBucket: "iconclaveticket-2e857.appspot.com",
//   messagingSenderId: "135405642394",
//   appId: "1:135405642394:web:489cbd0572f2ca3dcb7523",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); 

// export { db };


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzzQ10mmN1qhcUsrY_Zf5dVkMqTIAaGfs",
  authDomain: "iconclaveticket-2e857.firebaseapp.com",
  projectId: "iconclaveticket-2e857",
  storageBucket: "iconclaveticket-2e857.appspot.com",
  messagingSenderId: "135405642394",
  appId: "1:135405642394:web:489cbd0572f2ca3dcb7523",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };



