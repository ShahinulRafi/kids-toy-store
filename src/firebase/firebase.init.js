// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD51hzGICXrNsmjQe_DAdVOyVUBaydA_Xk",
  authDomain: "kids-toy-store-65d11.firebaseapp.com",
  projectId: "kids-toy-store-65d11",
  storageBucket: "kids-toy-store-65d11.firebasestorage.app",
  messagingSenderId: "56650588525",
  appId: "1:56650588525:web:fb7e0a91af2fee9118ba64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);