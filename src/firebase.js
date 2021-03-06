import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCp6TSViPgNZcd2Z_fTC_yy2M35Ik-8hRc",
    authDomain: "slack-dceb7.firebaseapp.com",
    projectId: "slack-dceb7",
    storageBucket: "slack-dceb7.appspot.com",
    messagingSenderId: "1004905323393",
    appId: "1:1004905323393:web:8d4fe35e701d71535c2680"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };