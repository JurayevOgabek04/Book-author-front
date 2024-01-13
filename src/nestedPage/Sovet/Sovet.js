import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Movies, MoviesUl } from "../../components"
import { AuthContext } from "../../context/Authcontext"


export const Sovet = () => {
    const token = useContext(AuthContext)
    const [data, setData] = useState([])

    const params = useParams()

    useEffect(() => {
        if (params.books === "books") {
            axios.get(`https://book-service-layer.herokuapp.com/book/genreId/3`, {
                headers: {
                    Authorization: token.token
                }
            })
                .then(res => setData(res.data))
        } else {
            axios.get(`https://book-service-layer.herokuapp.com/author/genreId/3`, {
                headers: {
                    Authorization: token.token
                }
            })
                .then(res => setData(res.data))
        }
    }, [token])
    return (
        <>
            {data.length && (
                <MoviesUl>
                    {
                        data.map(el => <Movies key={el.id} data={el} />)
                    }
                </MoviesUl>
            )
            }
        </>
    )
}