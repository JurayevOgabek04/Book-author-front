import axios from "axios"
import { useRef, useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/Authcontext"
import "./security.css"

export const Security = () => {

    const token = useContext(AuthContext)
    const [infome, setInfome] = useState([])
    const [put, setPut] = useState([])

    const elEmail = useRef("")
    const elCurrent = useRef("")
    const elNewPass = useRef("")
    const elConPass = useRef("")

    useEffect(() => {
        axios.get("https://book-service-layer.herokuapp.com/user/me", {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setInfome(res.data))
    }, [put])



    const handelFormSecutity = (evt) => {
        evt.preventDefault()
        const formSecurity = new FormData()

        formSecurity.append("email", elEmail.current.value);
        formSecurity.append("currentPassword", elCurrent.current.value);
        formSecurity.append("newPassword", elNewPass.current.value);


        axios.put("https://book-service-layer.herokuapp.com/user/security", formSecurity, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setPut(res.data))
            .catch(err => console.log(err))

        elEmail.value = null
        elCurrent.value = null
        elNewPass.value = null
        elConPass.value = null
    }
    console.log(infome);
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <form className="form w-50 account__form" onSubmit={handelFormSecutity}>
                    <h2 className="profil__title">Change Or Recover Your Password:</h2>
                    <div>
                        <h4 className="input__title">Email</h4>
                        <input ref={elEmail} type="email" className="form-control" defaultValue={infome.email} required />
                        <p className="input__text">Please enter your email.</p>
                    </div>
                    <div>
                        <h4 className="input__title">Current password</h4>
                        <input ref={elCurrent} type="text" className="form-control" required />
                        <p className="input__text">Please enter your password.</p>
                    </div>
                    <div className="d-flex w-100">
                        <div className="w-50">
                            <h4 className="input__title">New Password</h4>
                            <input ref={elNewPass} type="text" className="form-control" required />
                            <p className="input__text">Please enter your  phone number.</p>
                        </div>

                        <div className="ms-3 w-50">
                            <h4 className="input__title">Confirm Password</h4>
                            <input ref={elConPass} type="password" className="form-control" defaultValue={infome.phone} readOnly />
                            <p className="input__text">Please enter your email address.</p>
                        </div>
                    </div>


                    <button className="save__btn" type="submit">Save Changes</button>
                </form>
            </div >

        </>
    )
}