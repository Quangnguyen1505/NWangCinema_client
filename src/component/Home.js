import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../store/actions/authAction";
import { useDispatch } from "react-redux";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: '32px', marginTop: '20px' }}>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>
                Login
            </button>
            <button type="button" className="btn btn-danger" onClick={() => dispatch(logoutSuccess())}>
                Logout
            </button>
        </div>
    )
}

export default Home