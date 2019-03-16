import firebase from 'firebase'
import 'firebase/firestore'


const config = {
    apiKey: 'AIzaSyB4wK1delsuV2YAsvXn6URcNfvCiXSMOlA',
    authDomain: 'airborne-43653.firebaseapp.com',
    databaseURL: 'https://airborne-43653.firebaseio.com',
    projectId: 'airborne-43653',
    storageBucket: 'airborne-43653.appspot.com',
    messagingSenderId: '368438157423'
}

const firebaseapp = firebase.initializeApp(config)
const firestore = firebaseapp.firestore()
firestore.settings({
    timestampsInSnapshots: true
})
export default firestore

