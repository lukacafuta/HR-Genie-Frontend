import {LoginContainerStyled} from "../styles/loginStyles.js";
import ButtonBrand from "../components/buttons/ButtonBrand.jsx";

export default function LoginRoute() {
    return (
        <LoginContainerStyled>
            <img src="/genielogo.png"/>
            <h2>Welcome Back 😍</h2>
            <p>Boosting HR since 2024!</p>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
            </div>

            <ButtonBrand buttonText={"Login"}/>


        </LoginContainerStyled>
    )
}
