import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCLlRAYhVYc3J2SXNw80OGSCqoqvVZMISA",
  authDomain: "netflix-clone-454f2.firebaseapp.com",
  projectId: "netflix-clone-454f2",
  storageBucket: "netflix-clone-454f2.appspot.com",
  messagingSenderId: "965244519270",
  appId: "1:965244519270:web:872a229516ba032f8abea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async (email,password)=>{
 try {
    await signInWithEmailAndPassword(auth,email,password);
 } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
 }
}


const logOut = ()=>{
    signOut(auth);
}


export {auth,db,login,logOut,signUp}