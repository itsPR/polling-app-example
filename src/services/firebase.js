import firebase from 'firebase';
import 'firebase/firestore';

const config = {
   apiKey: "AIzaSyBxWJDYZf1rLQagXK84hHlrEcw2z9DgOkA",
    authDomain: "fccdevversion.firebaseapp.com",
    databaseURL: "https://fccdevversion.firebaseio.com",
    projectId: "fccdevversion",
    storageBucket: "fccdevversion.appspot.com",
    messagingSenderId: "119920133345"
  // apiKey: ,
  // authDomain: ,
  // databaseURL: ,
  // projectId: ,
  // storageBucket: ,
  // messagingSenderId: ,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get polls() {
    return this.store().collection('polls');
  }
}

export default new Firebase();
