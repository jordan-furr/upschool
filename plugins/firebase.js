// plugins/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC5tgT2nqvS9W_0dGj6mPi7UtUU8chdzyk",
    authDomain: "earnest-1e279.firebaseapp.com",
    projectId: "earnest-1e279",
    storageBucket: "earnest-1e279.appspot.com",
    messagingSenderId: "252653920337",
    appId: "1:252653920337:web:4f24e57d1fa0614773d870"
};

export default defineNuxtPlugin((nuxtApp) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    nuxtApp.provide('app', app);
    nuxtApp.provide('db', db);
});