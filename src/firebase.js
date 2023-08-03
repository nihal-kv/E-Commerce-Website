
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZJWzoq5Hn9QXxA9hcxjvbjqscv74aZQ4",
  authDomain: "e-commerce-website-e8fce.firebaseapp.com",
  databaseURL: "https://e-commerce-website-e8fce-default-rtdb.firebaseio.com",
  projectId: "e-commerce-website-e8fce",
  storageBucket: "e-commerce-website-e8fce.appspot.com",
  messagingSenderId: "457282709212",
  appId: "1:457282709212:web:ef42ec1138844eda7bb619"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app, auth};