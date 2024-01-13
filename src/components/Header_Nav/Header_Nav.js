import { NavLink } from "react-router-dom"
import "./nav__style.css"

export const Header_Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active__link' : 'nav__link')}>Bosh sahifa</NavLink>
            <NavLink to="/nasr" className={({ isActive }) => (isActive ? 'active__link' : 'nav__link')}>Nasr</NavLink>
            <NavLink to="/nazm" className={({ isActive }) => (isActive ? 'active__link' : 'nav__link')}>Nazm</NavLink>
            <NavLink to="/maqola" className={({ isActive }) => (isActive ? 'active__link' : 'nav__link')}>Maqolalar</NavLink>
            <NavLink to="/forum" className={({ isActive }) => (isActive ? 'active__link' : 'nav__link')}>Forum</NavLink>
        </nav>
    )
}