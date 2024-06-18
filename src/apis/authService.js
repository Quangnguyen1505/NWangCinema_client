import axios from "axios";

const apiLoginSuccess = async (id, tokenLogin) => new Promise( async (resolve, reject) => {
    try {
        let response = await axios({
            method: "POST",
            url: "http://localhost:8000/v1/api/auth/login-success",
            data: { id, tokenLogin }
        });

        resolve(response.data); 
    } catch (error) {
        reject("auth login",error);
    }
});

export default apiLoginSuccess;