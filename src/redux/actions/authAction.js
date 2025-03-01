
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER"
export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const setUser = (user) = ({
    type: SET_USER,
    payload: user,
})

export const loginWithEmail = () => async (dispatch) => {
    try {
        const provider = new EmailAuthProvider();
        const result = await signInWithEmailAndPassword(auth, provider);
        localStorage.setItem("user", JSON.stringify(result.user));
        dispatch({ type: SET_USER, payload: result.user });
    }
    catch (error) {
        console.error("Error Signing In", error);
    }
}

export const logout = () => async (dispatch) => {
    try {
        await signOut(auth);
        localStorage.removeItem("user");
        dispatch({ type: LOGOUT_USER });
    }
    catch (error) {
        console.error("Logout Error",error);
    }
}
