import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey:"AIzaSyAX2tYSrYbwod9n6GKu1Aq5UXJh30wLMww",
    authDomain:"feproject-ec124.firebaseapp.com",
    projectId:"feproject-ec124",
    storageBucket:"feproject-ec124.appspot.com",
    messagingSenderId:"262925807231",
    appId:"1:262925807231:web:b4830297d78a21b90ad94a",
    measurementId:"G-SMXSQMPJV3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);