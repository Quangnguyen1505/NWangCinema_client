import React from "react";

const handleLogin = () => {
    window.open('http://localhost:8000/v1/api/auth/google', '_self');
} 

const Login = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: '32px', marginTop: '20px' }}>
            <button type="button" className="btn btn-primary">
                FaceBook
            </button>
            <button type="button" className="btn btn-danger"  onClick={handleLogin}>
                Google
            </button>
        </div>
    )
}

export default Login