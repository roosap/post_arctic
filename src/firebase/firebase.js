import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4w2_t5cFP3G2YlJHjvi7ClaCga-qLk9o",
    authDomain: "photoapp-60c91.firebaseapp.com",
    databaseURL: "https://photoapp-60c91.firebaseio.com",
    projectId: "photoapp-60c91",
    storageBucket: "photoapp-60c91.appspot.com",
    messagingSenderId: "595232170021",
    appId: "1:595232170021:web:487f3035ce463dc4a8dfcc"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;