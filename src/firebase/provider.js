import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth"
import { FireBaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider();

export const GoogleAuth = async () => {
    try {
        const resp = await signInWithPopup(FireBaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = resp.user;
        return {
            ok: true, displayName, email, photoURL, uid, errorMessage: ''
        }
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return {
            ok: false, errorMessage: errorMessage
        }
    }
}

export const RegisterWithEmailPassword = async (emailP, password, displayName) => {
    try {
        const resp = await createUserWithEmailAndPassword(FireBaseAuth, emailP, password);
        updateProfile(FireBaseAuth.currentUser, { displayName });
        const { email, uid, photoURL } = resp.user
        return {
            ok: true,
            email, uid, photoURL
        }
    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return {
            ok: false, errorMessage: errorMessage
        }
    }
}
export const LogInWithEmailPassword = async (emailP, password) => {

    try {
        const resp = await signInWithEmailAndPassword(FireBaseAuth, emailP, password);
        const { email, uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            email, uid, photoURL, displayName
        }
    } catch (error) {
        const errorMessage = error.message;
        return {
            ok: false, errorMessage: errorMessage
        }
    }
}