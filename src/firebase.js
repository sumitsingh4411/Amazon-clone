import firebase from "firebase";
const firebaseConfig = {
        apiKey: "AIzaSyB8abBzfitaAl4bGWjtNCwIm1LGHKabBhI",
        authDomain: "fir-f4895.firebaseapp.com",
        projectId: "fir-f4895",
        storageBucket: "fir-f4895.appspot.com",
        messagingSenderId: "536943814281",
        appId: "1:536943814281:web:351b858b62b66821158858"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  const db=fire.firestore();
  const auth=fire.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;
