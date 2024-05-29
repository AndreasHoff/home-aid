import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAX5tF5aabM5-zOqY7nvg03l3psYMjJoXU",
  authDomain: "home-aid-b417b.firebaseapp.com",
  projectId: "home-aid-b417b",
  storageBucket: "home-aid-b417b.appspot.com",
  messagingSenderId: "1092560110873",
  appId: "1:1092560110873:web:facd43138a367960f1f188",
  measurementId: "G-DS22XW35HQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { analytics, db };
export default app;

