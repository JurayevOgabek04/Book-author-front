
import { useRef, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"

import "./login.css"
import SingBg from "../../image/singin.svg"
export const Login = () => {

    const [data, setData] = useState([])

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
        fetch('http://localhost:3000/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    if (data.access_token) {
                        window.localStorage.setItem("token", data.access_token
                        )
                        navigete("/")
                        window.location.reload();
                    } else {
                        setData(data)
                    }
                }
            });


        console.log(data);
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
                    <input className="form-control mb-4" ref={elEmail} type="email" placeholder="email..." required />
                    <input className="form-control" ref={elPassword} type="password" placeholder="password..." required />
                    <button className="login__btn" type="submit">Next step</button>
                </form>
            </div>
        </div>
    )
}