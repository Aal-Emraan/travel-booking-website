import initializeAuthentication from "../../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState([]);
    const [error, setError] = useState("");


    const auth = getAuth();

    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(err => {
            setError(err.message);
            console.log(err.message);
        })

    }

    // console.log(user);

    return {
        user,
        error,
        signInWithGoogle
    }
    
}

export default useFirebase;