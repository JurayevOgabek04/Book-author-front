import axios from "axios"

import "./search.css"
import { useRef, useEffect, useState } from "react"

export const Search = () => {
    const elSearch = useRef("")
    const [search, setSearch] = useState([])
    const name = elSearch.current.value

    console.log(elSearch.current.value);

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/${name}`)
            .then(res => setSearch(res))
            .catch(err => console.log(err))
    }, [name])

    console.log(search);


    return (
        <div className="search">
            <div className="search__inner">
                <h2 className="search__title">Qidirish</h2>
                <div>
                    <input className="search__input" type="text" ref={elSearch} placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />

                    <button className="search__btn" type="submit">Izlash</button>
                </div>
            </div>
        </div>
    )
}