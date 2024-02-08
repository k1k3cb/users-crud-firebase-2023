
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARh_cnqE_4f64WnVciplLZdTHfEPo-7sg",
    authDomain: "users-crud-2023.firebaseapp.com",
    projectId: "users-crud-2023",
    storageBucket: "users-crud-2023.appspot.com",
    messagingSenderId: "491958993088",
    appId: "1:491958993088:web:825ee10da5326f15bc2d25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);