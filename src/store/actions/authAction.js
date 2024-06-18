import apiLoginSuccess from "../../apis/authService";
import { actionType } from "./actionType";

export const loginSuccess = (id, tokenLogin) => async (dispatch) => {
    try {
        let response = await apiLoginSuccess(id, tokenLogin);
        if(response?.metadata.err === 0){
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                data: response.metadata.token
            })
        }else {
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionType.LOGIN_SUCCESS,
            data: null
        })
    }
};

export const logoutSuccess = () => async (dispatch) => {
    dispatch({
        type: actionType.LOGOUT_SUCCESS,
        data: null
    })
}