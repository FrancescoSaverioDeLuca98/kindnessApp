import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD_GVzyEOY_7GJ9nNeSUdf-Ahrir1z2G60",
  authDomain: "todo-app-521c4.firebaseapp.com",
  databaseURL: "https://todo-app-521c4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-app-521c4",
  storageBucket: "todo-app-521c4.appspot.com",
  messagingSenderId: "341055682001",
  appId: "1:341055682001:web:1a96274c3e7325986ddcf0",
  measurementId: "G-W0FJ3N5GXH"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)