import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyDFJhL_kiiO0J8r12MD4DMCN5A9CQREqp0",
 authDomain: "net-blogplan.firebaseapp.com",
 projectId: "net-blogplan",
 storageBucket: "net-blogplan.appspot.com",
 messagingSenderId: "742469833854",
 appId: "1:742469833854:web:5f1007a5b4c47626db342f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings( { timestampsInSnapshots: true});

export default firebase;