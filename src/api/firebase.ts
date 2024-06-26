import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import { firebaseConfig } from './firebase.config'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)