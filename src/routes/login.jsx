import {LoginContainerStyled, LoginPageStyled} from "../styles/loginStyles.js";
import {BtnLogin} from "../styles/buttonStyles.js";
import {useState} from "react";

export default function LoginRoute() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (e) => {
        console.log("email: ", email);
        console.log("password: ", password);
        console.log("e: ", e);

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


                    <BtnLogin>
                        Login
                    </BtnLogin>
                </form>


            </LoginContainerStyled>
        </LoginPageStyled>
    )
}
