import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCzO2MA_U1wE2WXqSdRIM5-hrojpMBuzjY",
    authDomain: "react-chat-725c7.firebaseapp.com",
    projectId: "react-chat-725c7",
    storageBucket: "react-chat-725c7.appspot.com",
    messagingSenderId: "934812849989",
    appId: "1:934812849989:web:f587c2cda01b3d0bafd02c",
    measurementId: "G-VP6TG3LJR0"
};

const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();

const database = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, provider };