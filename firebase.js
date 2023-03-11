import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB0mW88DBnnSxI4Yb2V-HOslzrfTbgvDRM",
  authDomain: "kindness-app-28807.firebaseapp.com",
  projectId: "kindness-app-28807",
  storageBucket: "kindness-app-28807.appspot.com",
  messagingSenderId: "983885579648",
  appId: "1:983885579648:web:9a3a62143e51e796c9ed65"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)