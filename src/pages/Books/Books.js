import { Outlet } from "react-router-dom"
import { Search } from "../../search"
import { NestedHeader } from "../../components"
import "./books.css"
import bgImg from "../../image/bg.png"

export const Books = () => {


    return (
        <div className="books__site">
            <img className="books__img" src={bgImg} alt="Bg image sayt" />
            <div className="books__search">
                <Search />
            </div>
            <NestedHeader />
            <Outlet />
        </div>
    )
}