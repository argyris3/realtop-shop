// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqAT8gR_MdehJJozXZNwN7ymQUrS0bVb4',
  authDomain: 'realtop-shop.firebaseapp.com',
  projectId: 'realtop-shop',
  storageBucket: 'realtop-shop.appspot.com',
  messagingSenderId: '1030792060353',
  appId: '1:1030792060353:web:f7d27e87f99ecd2842e340',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
