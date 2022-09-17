import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALUSx5qtUKsPwXpNO9uaT-hj91QN0Rxu0",
  authDomain: "ngomeng-a1809.firebaseapp.com",
  projectId: "ngomeng-a1809",
  storageBucket: "ngomeng-a1809.appspot.com",
  messagingSenderId: "16813362905",
  appId: "1:16813362905:web:29535fac1a58dc8bfaf8c8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
