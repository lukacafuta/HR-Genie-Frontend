import {ErrorMessageStyled, LoginContainerStyled, LoginPageStyled} from "../styles/loginStyles.js";
import {BtnLogin} from "../styles/buttonStyles.js";
import {useState} from "react";
import {api} from "../common/api.js";
import {login} from "../store/slices/UserSlice.jsx";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function LoginRoute() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessageVisibility, setErrorMessageVisibility] = useState(false)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        // console.log("email: ", email);
        // console.log("password: ", password);
        e.preventDefault();

        // console.log("e: ", e);
        try {
            // console.log("In try")
            const res = await api.post("/auth/token/", {email, password})
            localStorage.setItem("accessToken", res.data.access);
            dispatch(login(res.data.access));
            navigate("/employee")
        } catch (error) {
            // console.log("No Login for you")
            console.error("catched: ", error);
            setErrorMessageVisibility(true);
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


                    <ErrorMessageStyled className={errorMessageVisibility ? "errorMessageVisible" : ""}>Username or password incorrect.
                        Please try again.</ErrorMessageStyled>


                </form>


            </LoginContainerStyled>
        </LoginPageStyled>
    )
}
