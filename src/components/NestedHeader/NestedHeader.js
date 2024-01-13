import { NavLink } from "react-router-dom"
import "./nestedheader.css"
export const NestedHeader = () => {
    return (
        <>
            <div className="nested__title">
                <h1 className="title" >Asosiy kategoriyalar</h1>
            </div>
            <nav className="nested__nav">
                <NavLink to="" onClick={() => console.log(1)} className={({ isActive }) => (isActive ? 'activeLink' : "navlink")}>Temuriylar davri </NavLink>
                <NavLink to="jadid" className={({ isActive }) => (isActive ? 'activeLink' : "navlink")}>Jadid adabiyoti  </NavLink>
                <NavLink to="sovet" className={({ isActive }) => (isActive ? 'activeLink' : "navlink")}>Sovet davri </NavLink>
                <NavLink to="mustaqil" className={({ isActive }) => (isActive ? 'activeLink' : "navlink")}>Mustaqillik davri </NavLink>

            </nav>
        </>
    )
}