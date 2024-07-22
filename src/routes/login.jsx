import {LoginContainerStyled, LoginPageStyled} from "../styles/loginStyles.js";
import {BtnLogin} from "../styles/buttonStyles.js";
import {useState} from "react";
import {api} from "../common/api.js";
import {login} from "../store/slices/UserSlice.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function LoginRoute() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        // console.log("email: ", email);
        // console.log("password: ", password);
        e.preventDefault();

        // console.log("e: ", e);
        try {
            // console.log("In try")
            api.post("/auth/token/", {email, password})
                .then(res => {
                    // console.log("API call successful", res)

                    // console.log(res);
                    // console.log(res.data.access);
                    localStorage.setItem("accessToken", res.data.access);
                    dispatch(login(res.data.access));
                    navigate("/employee")
                })
        } catch (error) {
            // console.log("No Login for you")
            console.error(error);
            setErrorMessage(error);
            console.log(errorMessage)
        }

    }


    return (
        <LoginPageStyled>
            <LoginContainerStyled>
                <img src="/genielogo.png"/>
                <h2>Welcome Back 😍</h2>
                <p>Boosting HR since 2024!</p>
                <form onSubmit={(e) => handleLoginSubmit(e)}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <BtnLogin type="submit">
                        Login
                    </BtnLogin>
                    {errorMessage && (

                        <p><br/>Username or password incorrect. Please try again.</p>

                    )}
                </form>


            </LoginContainerStyled>
        </LoginPageStyled>
    )
}
