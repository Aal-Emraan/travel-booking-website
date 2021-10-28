import initializeAuthentication from "../../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [error, setError] = useState("");

    const auth = getAuth();

    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            setError(err.message);
            console.log(err.message);
        })

    }

    return {
        signInWithGoogle
    }
    
}

export default useFirebase;