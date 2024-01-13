import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/Authcontext"

import "./authorbook.css"
import Polzav from "../../image/polzavatel.png"

export const AuthorBookNav = () => {
    const navigete = useNavigate()
    const [btn, setBtn] = useState(false)

    var acc__image = Polzav
    const token = useContext(AuthContext)

    const [userme, setUserme] = useState([])

    useEffect(() => {
        axios.get("https://book-service-layer.herokuapp.com/user/me", {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setUserme(res.data))
    }, [])

    if (userme.image !== "undefined") {
        var acc__image = `https://book-service-layer.herokuapp.com/${userme.image}`
    }
    return (
        <nav className="d-flex align-items-center navbarsayt">
            <img src={acc__image} className='image__acc' alt="" />
            <div class="dropdown ms-3">
                <button class="btn btn-secondary dropdown-toggle drrr" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">

                </button>
                <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenu2">
                    <li>
                        <Link className="add__link dropdown-item" type="button" to="/settings">My Account</Link>
                    </li>
                    <li>
                        <Link className="add__link dropdown-item" type="button" to="/book">Add Book</Link>
                    </li>
                    <li>
                        <Link className="add__link dropdown-item" type="button" to="/author">Add Author</Link>
                    </li>
                    <li>
                        <button refresh="true" className="outlet dropdown-item" type="button" onClick={() => {
                            localStorage.removeItem("token")
                            navigete("/")
                            window.location.reload();

                        }}>Outlet</button>
                    </li>
                </ul>

            </div>
        </nav >
    )
}