import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
console.log(process.env);
const firebaseConfig = {
  apiKey: 'AIzaSyCFQomAOL3TSM8sVgbavWJRdreXUhK6Kpg',
  authDomain: 'react-app-a3b15.firebaseapp.com',
  projectId: 'react-app-a3b15',
  storageBucket: 'react-app-a3b15.appspot.com',
  messagingSenderId: '249655106704',
  appId: '1:249655106704:web:18a03a98983a44be53cc15',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const authInfo = getAuth(app);
export default db;
