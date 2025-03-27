// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDocs, getFirestore, collection, addDoc, doc, setDoc, getDoc, updateDoc} from 'firebase/firestore'
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage'
import 'firebase/compat/storage'
import { 
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID
  } from '@env';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export { getDocs, ref, addDoc, setDoc, collection, getStorage, app, doc, getDoc, updateDoc, uploadString, getDownloadURL };
/*
//collection references
const usersCollection = db.collection('users');

//get collection data
const getUserInfo = document.querySelector('.getInfo') 
  getUserInfo.getDocs(usersCollection).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    }).catch((error) => {
        console.log("Error getting users: ", error);
    });
})

//adding stuff to the database
const addUsers = async (name, email, password) => {
    await usersCollection.add({
        name,
        email,
        password
    });
}

//delete stuff from the database
const deleteUsers = async (id) => {
    await usersCollection.doc(id).delete();
}
*/
