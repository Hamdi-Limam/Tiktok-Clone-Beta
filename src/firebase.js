import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDu3eeALU7jD8Y_l2Sl8qlRjw8K8khsKPc",
  authDomain: "tiktok-clone-126e1.firebaseapp.com",
  databaseURL: "https://tiktok-clone-126e1.firebaseio.com",
  projectId: "tiktok-clone-126e1",
  storageBucket: "tiktok-clone-126e1.appspot.com",
  messagingSenderId: "328041621202",
  appId: "1:328041621202:web:02cb11a2909f6fa6e5af0b",
  measurementId: "G-V05HM54R2R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
