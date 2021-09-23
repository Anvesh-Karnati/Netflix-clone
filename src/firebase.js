import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZaM-wq43jnjtRe-5QQvGvMhsu3bjftUs",
  authDomain: "netflix-clone-fe24b.firebaseapp.com",
  projectId: "netflix-clone-fe24b",
  storageBucket: "netflix-clone-fe24b.appspot.com",
  messagingSenderId: "41213971694",
  appId: "1:41213971694:web:adac570b8b7d7b618bb7ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
