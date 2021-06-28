import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
 apiKey: "xyxyxyxyxyyxyxyx",
 authDomain: "test-testing.firebaseapp.com",
 projectId: "net-testing",
 storageBucket: "net-testing.appspot.com",
 messagingSenderId: "7424698555533854444",
 appId: "1:742469833854:web:507a5b4c476242f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings( { timestampsInSnapshots: true});

export default firebase;