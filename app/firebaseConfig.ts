// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCUnkhxXQZDRYVeAl6ElYAnUwEHRWR89EM",
  authDomain: "educms-45c45.firebaseapp.com",
  projectId: "educms-45c45",
  storageBucket: "educms-45c45.appspot.com",
  messagingSenderId: "163897138911",
  appId: "1:163897138911:web:6353eeb808e12b30ff536a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
