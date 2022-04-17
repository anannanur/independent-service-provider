// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC0R8sFyKBrVKkEMhiGSN-pb7LbRYa1jw",
    authDomain: "independent-service-prov-77fa5.firebaseapp.com",
    projectId: "independent-service-prov-77fa5",
    storageBucket: "independent-service-prov-77fa5.appspot.com",
    messagingSenderId: "245595218785",
    appId: "1:245595218785:web:63a68fa086d5a41633db20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;