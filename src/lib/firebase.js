import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBRCNehafabE2A_kOPHEkdclRUCK4_1uVo',
  authDomain: 'instagram-yt-83045.firebaseapp.com',
  projectId: 'instagram-yt-83045',
  storageBucket: 'instagram-yt-83045.appspot.com',
  messagingSenderId: '1003130178730',
  appId: '1:1003130178730:web:3354ab55362ef0c920d4d3'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file only ONCE!
// seedDatabase(firebase);
// console.log('firebase seed');

export { firebase, FieldValue };
