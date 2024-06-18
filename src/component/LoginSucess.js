import React, { useEffect } from "react";
import { loginSuccess } from "../store/actions/authAction";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginSuccess = () => {
    const { userId, tokenLogin } = useParams();
    const dispatch = useDispatch();
    const { isloggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchToken = async () => {
            dispatch(loginSuccess(userId, tokenLogin));
        }

        fetchToken();
    }, []);

    return (
        <div>
            {isloggedIn ? <Navigate to={'/'} replace={true}/> : <h3>Pls! Login google</h3> }
        </div>
    )
}

export default LoginSuccess