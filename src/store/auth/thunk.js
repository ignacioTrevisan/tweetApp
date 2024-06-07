import { GoogleAuth, LogInWithEmailPassword, RegisterWithEmailPassword } from "../../firebase/provider"
import { logIn, logOut, setChecking } from "./authSlice";

export const signWithGoogle = () => {
    return async (dispatch) => {
        dispatch(setChecking());
        const resp = await GoogleAuth();
        console.log(resp);

        if (resp.ok) {
            dispatch(logIn(resp))
        } else {
            dispatch(logOut())
        }
    }
}
export const RegisterWithEmailAndPassword = (email, password, displayName) => {
    return async (dispatch) => {
        dispatch(setChecking());
        const resp = await RegisterWithEmailPassword(email, password, displayName);
        resp.displayName = displayName;
        if (resp.ok) {
            dispatch(logIn(resp));
        } else {
            dispatch(logOut());
        }
    }
}
export const logInWithEmailAndPassword = (email, password) => {
    return async (dispatch) => {
        dispatch(setChecking());
        const resp = await LogInWithEmailPassword(email, password);
        console.log(resp)
        if (resp.ok) {
            dispatch(logIn(resp));
        } else {
            dispatch(logOut(resp.errorMessage));
        }
    }
}

