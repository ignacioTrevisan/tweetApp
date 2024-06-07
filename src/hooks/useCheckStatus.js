import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FireBaseAuth } from "../firebase/config";
import { logIn, logOut } from "../store/auth";



export const UseCheckStatus = () => {

    const { status } = useSelector(state => state.authSlice);

    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(FireBaseAuth, async (user) => {
            if (!user) return dispatch(logOut());
            dispatch(logIn({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                errorMessage: null,
            }))

        })
    }, [])


    return { status };
}