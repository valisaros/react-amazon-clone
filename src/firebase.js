import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9u58yJF4zx8CVXW9rUr9I8pBL4uNypUE",
  authDomain: "clone-amaz-valisaros.firebaseapp.com",
  databaseURL: "https://clone-amaz-valisaros.firebaseio.com",
  projectId: "clone-amaz-valisaros",
  storageBucket: "clone-amaz-valisaros.appspot.com",
  messagingSenderId: "156772573725",
  appId: "1:156772573725:web:3534e98c308e211fe65cf4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };