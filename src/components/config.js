import { initializeApp } from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: 'AIzaSyAGqR0vSOWasfdoxBprkVCHWWBp5hJbJVo',
    authDomain: 'notesavr.firebaseapp.com',
    projectId: 'notesavr',
    storageBucket: 'notesavr.appspot.com',
    messagingSenderId: '1059309597915',
    appId: '1:1059309597915:web:4b64c0dce8fb8666ac48fe',
    measurementId: 'G-SNTCFBN57E',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export { auth, provider };
