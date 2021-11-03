import initializeAuthentication from "../../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


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
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser([]);
        })
        .finally(() => setIsLoading(false))
    }

    // console.log(user);

    return {
        user,
        isLoading,
        signInWithGoogle,
        logOut
    }
    
}

export default useFirebase;