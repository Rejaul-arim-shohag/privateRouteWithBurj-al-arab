import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googlePrivider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googlePrivider)
            .then((result) => {
                console.log("result", result);
            })
            .then((err) => {
                console.log("err", err)
            })
    };

    const logout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((err) => {
                console.log("Logout error", err)
            })
    };

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
           if(user){
            setUser(user)
           } 
        })
    }, []);

    return {
        user,
        signInUsingGoogle,
        logout,
    }

};
export default useFirebase;