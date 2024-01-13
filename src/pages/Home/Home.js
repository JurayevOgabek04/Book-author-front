import { Outlet } from "react-router-dom"
import { Search } from "../../search"
import { NestedHeader } from "../../components"


import "./home.css"
import bgImg from "../../image/bg.png"

export const Home = () => {


    return (
        <div className="home__site">
            <img className="home__img" src={bgImg} alt="Bg image sayt" />
            <div className="home__search">
                <Search />
            </div>
            <NestedHeader />
            <div className="outlet__div pe-4">
                <Outlet />
            </div>
        </div>
    )
}