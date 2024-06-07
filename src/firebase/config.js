
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBtxF1f1Jr0PQzbjabtdheshxjciDp-iBE",
    authDomain: "proyectotw-c8189.firebaseapp.com",
    projectId: "proyectotw-c8189",
    storageBucket: "proyectotw-c8189.appspot.com",
    messagingSenderId: "917091725166",
    appId: "1:917091725166:web:5487655a4e1ab044a01b7f"
};


export const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);