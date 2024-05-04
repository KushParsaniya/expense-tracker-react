import config from "../config/config.js";
import axios from "axios";

class AuthService {

    baseUri = null;

    constructor() {
        this.baseUri = config.baseUrl
    }

    async signUp({name, email, password, phone}) {
        try {
            const signUpUri = this.baseUri + config.signUpEndpoint;

            const res = await axios.post(signUpUri, {
                name, email, password, phone
            });

            return res.data

        } catch (e) {
            console.log("authService :: signUp :: error", e)
        }
    }

    async signIn({email, password}) {
        try {
            const signInUri = this.baseUri + config.signInEndpoint;

            const base64Encoded = btoa(`${email}:${password}`);
            const res = await axios.post(signInUri, {base64Encoded});
            return res.data
        } catch (e) {
            console.log("authService :: signin :: error", e)
        }
    }
}

const authService = new AuthService();
export default authService;