import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNqzdQnjJNm9_vThGpStErr1UGzapaNSo",
  authDomain: "school-attendance-app-e42b5.firebaseapp.com",
  databaseURL: "https://school-attendance-app-e42b5-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-e42b5",
  storageBucket: "school-attendance-app-e42b5.appspot.com",
  messagingSenderId: "935548465656",
  appId: "1:935548465656:web:886c9c28787be001c6e60d",
  measurementId: "G-8WFJ0HSHG9"
};

let app = firebase.initializeApp(firebaseConfig); 
export default app.database();