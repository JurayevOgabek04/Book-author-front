import { NavLink, useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "./settings.css"
import { useEffect } from "react"

export const Settings = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/settings/account')
    }, [])
    return (
        <>
            <nav className="d-flex settings__nav">
                <NavLink to="account" className={({ isActive }) => isActive ? "active__set" : "settings__link"}>My Account</NavLink>

                <NavLink to="security" className={({ isActive }) => isActive ? "active__set" : "settings__link"}>Security</NavLink>

                <NavLink to="setpage" className={({ isActive }) => isActive ? "active__set" : "settings__link"}>Settings</NavLink>

            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}