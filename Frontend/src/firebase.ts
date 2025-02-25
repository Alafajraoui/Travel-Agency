import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3CwbxHhPEvSfjjVjtMeILAYKnDRSEkjo",
  authDomain: "voyage-c363b.firebaseapp.com",
  projectId: "voyage-c363b",
  storageBucket: "voyage-c363b.firebasestorage.app",
  messagingSenderId: "281474882452",
  appId: "1:281474882452:web:89de1f05380824bbbf0d81",
  measurementId: "G-PH6CC0WQCG"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);