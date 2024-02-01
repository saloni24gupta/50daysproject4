
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD6FF-MuUqEi-5QuI7pvig-mRT71K-56MU",
  authDomain: "netflex-clone-25f1f.firebaseapp.com",
  projectId: "netflex-clone-25f1f",
  storageBucket: "netflex-clone-25f1f.appspot.com",
  messagingSenderId: "813413117409",
  appId: "1:813413117409:web:d76e5f7172eb6637d2f6a0",
  measurementId: "G-X1V8PVD2HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);