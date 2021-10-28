import initializeAuthentication from "../../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();

    const signInWithGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result)
        })

    }

    return {
        signInWithGoogle
    }
    
}

export default useFirebase;