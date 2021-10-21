import initializeFirebaseAuthentication from "../firebase/firebase.init";
import { updateProfile, getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";




initializeFirebaseAuthentication();

const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [specialist, setSpecialist] = useState([]);

    const getUserPassword = e => {
        setPassword(e.target.value);
    }

    const getUserEmail = e => {
        setEmail(e.target.value);
    }
    const getUserName = e => {
        setName(e.target.value);
    }
    const updateUserProfile = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => { });
    }

    const sigiupWithEmailAndPassword = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCreate) => {
                setUser(userCreate.user)
                updateUserProfile()
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const emailAndPasswordSignIn = (e) => {
        e.preventDefault();
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
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetch("/specialists.json")
            .then(res => res.json())
            .then(data => setSpecialist(data))
    }, []);



    return {
        specialist,
        user,
        error,
        isLoading,
        getUserName,
        getUserEmail,
        getUserPassword,
        sigiupWithEmailAndPassword,
        emailAndPasswordSignIn,
        googleSignIn,
        logOut
    }
}
export default useFirebase;