import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAxThSabmrbfrNiuTP0TNsoY3yVP-tlEE4",
    authDomain: "contacts-1412f.firebaseapp.com",
    projectId: "contacts-1412f",
    storageBucket: "contacts-1412f.appspot.com",
    messagingSenderId: "155237244528",
    appId: "1:155237244528:web:ec1f10d689311c673c5eb5"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;