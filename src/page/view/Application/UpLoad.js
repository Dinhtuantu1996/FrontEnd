import UpLoad from 'firebase';

var config = {
    apiKey: "AIzaSyBDYXjqXgqoKeN3-s9omE2mVcE_IwV7m3E",
    authDomain: "reactjs-file.firebaseapp.com",
    databaseURL: "https://reactjs-file.firebaseio.com",
    projectId: "reactjs-file",
    storageBucket: "reactjs-file.appspot.com",
    messagingSenderId: "404447380334",
    appId: "1:404447380334:web:5c3c76f92f8a59091a377f",
    measurementId: "G-77DECDCC03"
};




UpLoad.initializeApp(config);

export default UpLoad