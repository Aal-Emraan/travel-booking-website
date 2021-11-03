import initializeAuthentication from "../../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState("");


    const auth = getAuth();

    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }else{
                setUser([]);
            }
        })
    }, [])

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser([]);
        })
    }

    // console.log(user);

    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
    
}

export default useFirebase;