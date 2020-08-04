import * as firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA1PDRS3_Ql6TSfUPatgRADcGZTD3QNYbA",
  authDomain: "portfolio-12c79.firebaseapp.com",
  databaseURL: "https://portfolio-12c79.firebaseio.com",
  projectId: "portfolio-12c79",
  storageBucket: "portfolio-12c79.appspot.com",
  messagingSenderId: "55041360907",
  appId: "1:55041360907:web:3c00a42c70fd9dc3b0730e",
  measurementId: "G-GKJW1H8KQ6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}
firebase.analytics();

export default firebase;
