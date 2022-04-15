// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTIa_izvJHMUd_IzGfDqtwBC1nj7IqDBw",
  authDomain: "ema-john-practis.firebaseapp.com",
  projectId: "ema-john-practis",
  storageBucket: "ema-john-practis.appspot.com",
  messagingSenderId: "472419724208",
  appId: "1:472419724208:web:5cabc8105aa747a7b40475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth);