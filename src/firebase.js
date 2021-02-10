import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDRhQ9Bjo9o6dS7iwZnxsAiN0P131WjUA",
  authDomain: "idobatakaigi-e82a7.firebaseapp.com",
  projectId: "idobatakaigi-e82a7",
  storageBucket: "idobatakaigi-e82a7.appspot.com",
  messagingSenderId: "682729633863",
  appId: "1:682729633863:web:f450ce813f48f6b2435962"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text  }) => {
  messagesRef.push({ name, text });
};
