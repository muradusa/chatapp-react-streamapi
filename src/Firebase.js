import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbVmpIpTjS0fLDsTbshfHlkUUdkaJbOsQ",
  authDomain: "chatapp-react-streamapi.firebaseapp.com",
  projectId: "chatapp-react-streamapi",
  storageBucket: "chatapp-react-streamapi.appspot.com",
  messagingSenderId: "179215483947",
  appId: "1:179215483947:web:c248d9190444e5af97966e",
  measurementId: "G-JLT4NQ5M0Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };

// export default auth;
