import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-HKVnuGY5eitjUBxOQivi0pyRwV-K55M",
    authDomain: "expensify-a1e4d.firebaseapp.com",
    databaseURL: "https://expensify-a1e4d.firebaseio.com",
    projectId: "expensify-a1e4d",
    storageBucket: "expensify-a1e4d.appspot.com",
    messagingSenderId: "450963661034"
};
firebase.initializeApp(config);

firebase.database().ref().set({
   name: 'Changyang Zhang'
});