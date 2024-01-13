import { NavLink, Link } from "react-router-dom"
import "./pablicnav.css"

export const Pablic__Nav = () => {
    return (
        <div className="pablic__nav">
            <nav></nav>
            <nav>
                <ul className="d-flex login__nav">
                    <li>
                        <Link className="btn btn-primary" to="/login">Sign in</Link>
                    </li>
                    <li>
                        <Link className="btn btn-success ms-4" to="/loginup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}