
import { useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"
import "./login.css"
import SingBg from "../../image/singin.svg"
export const Login = () => {
    // const [data, setData] = useState({})


    const elEmail = useRef()
    const elPassword = useRef()
    const navigete = useNavigate()

    const handalForm = (evt) => {
        evt.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: elEmail.current.value,
                password: elPassword.current.value
            })
        };
        fetch('https://book-service-layer.herokuapp.com/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    window.localStorage.setItem("token", data.token)
                    navigete("/")

                    window.location.reload();

                }
            });



        evt.target.reset()
    }

    return (
        <div className="login">
            <div className="login__div">
                <img src={SingBg} alt="" />

            </div>
            <div className="login__hero w-50">
                <h1>Login in</h1>
                <p>Do not you have an account? <NavLink className="login__link" to="/loginup">Sing Up</NavLink></p>
                <form className="form" onSubmit={handalForm}>
                    <input className="form-control mb-4" ref={elEmail} type="email" placeholder="email..." />
                    <input className="form-control" ref={elPassword} type="password" placeholder="password..." />
                    <button className="login__btn" type="submit">Next step</button>
                </form>
            </div>
        </div>
    )
}