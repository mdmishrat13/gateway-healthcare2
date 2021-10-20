import initializeFirebaseAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";




initializeFirebaseAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const getUserPassword = e => {
        setPassword(e.target.value);
    }

    const getUserEmail = e => {
        setEmail(e.target.value);
    }

    const sigiupWithEmailAndPassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCreate) => {
                setUser(userCreate.user)
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    const emailAndPasswordSignIn = () => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    })
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    return {
        user,
        error,
        isLoading,
        getUserEmail,
        getUserPassword,
        sigiupWithEmailAndPassword,
        emailAndPasswordSignIn,
        googleSignIn,
        logOut
    }
}
export default useFirebase;