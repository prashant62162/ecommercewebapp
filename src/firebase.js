import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBgqQ72J-DcuDdPkt6Jxfmvvm_0T_b10q0",
    authDomain: "ecommerce-c1310.firebaseapp.com",
    projectId: "ecommerce-c1310",
    storageBucket: "ecommerce-c1310.appspot.com",
    messagingSenderId: "600551107911",
    appId: "1:600551107911:web:09b913e63476a38fd8f062"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };