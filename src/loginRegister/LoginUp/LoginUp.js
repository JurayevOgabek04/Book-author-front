import axios from "axios"
import { useNavigate, NavLink } from "react-router-dom"
import { useRef } from "react"
import "./loginup.css"
import singupImg from "../../image/singup.png"

export const LoginUp = () => {
    const navigete = useNavigate()
    const elFrist = useRef("")
    const elLast = useRef("")
    const elPhone = useRef("")
    const elEmail = useRef("")
    const elPassword = useRef("")

    const handelForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()

        formdata.append("first_name", elFrist.current.value);
        formdata.append("last_name", elLast.current.value);
        formdata.append("phone", elPhone.current.value);
        formdata.append("email", elEmail.current.value);
        formdata.append("password", elPassword.current.value);

        axios.post("https://book-service-layer.herokuapp.com/user/register", formdata)
            .then(data => {
                if (data) {
                    window.localStorage.setItem("token", data.token)
                    navigete("/")
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="d-flex align-items-center">
            <div className="singupimg__div">
                <img src={singupImg} alt="" />
            </div>
            <div className="singup__inner w-50">
                <h3 className="singup__title">Sign up</h3>
                <p>Already have an account? <NavLink className="singup__link" to="/login">Sing in</NavLink></p>
                <form className="form" onSubmit={handelForm}>
                    <input ref={elFrist} className="form-control mb-3" type="text" placeholder="Enter  FristName" required />
                    <input ref={elLast} className="form-control mb-3" type="text" placeholder="Enter LastName" required />
                    <input ref={elPhone} className="form-control mb-3" type="number" placeholder="Enter phone" required />
                    <input ref={elEmail} className="form-control mb-3" type="email" placeholder="EnterEmail" required></input>
                    <input ref={elPassword} className="form-control mb-3" type="password" placeholder="EnterPassword" required />

                    <button type="submit" className="singup__btn">Next step</button>
                </form>
            </div>
        </div>

    )
}

