import { EmailAuthProvider, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import {auth} from "../../firebase/firebaseConfig";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
}

const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";

export const loginWithEmail = () => async (dispatch) => {
    const provider = new EmailAuthProvider();
    const result = await signInWithEmailAndPassword(auth, provider);
    localStorage.setItem("user", JSON.stringify(result.user));
    dispatch({type:SET_USER, payload:result.user});
}

export const logout = () => async (dispatch) => {
    await signOut(auth);
    localStorage.removeItem("user");

    dispatch({type:LOGOUT_USER});
}

export default function authReducer(state = initialState,action) {
    switch(action.type) {
        case SET_USER:
            return {...state,user:action.payload};
        
        case LOGOUT_USER:
            return {...state,user:null};

        default:
            return state;
    }
}