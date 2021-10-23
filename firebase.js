import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbapYadbhXzPp_uplZarharXwagMaU324',
  authDomain: 'uber-eats-project-94108.firebaseapp.com',
  projectId: 'uber-eats-project-94108',
  storageBucket: 'uber-eats-project-94108.appspot.com',
  messagingSenderId: '939371953747',
  appId: '1:939371953747:web:70cd7c35b3c3153e86d0a6',
  measurementId: 'G-GR8JBD2B2F',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase
