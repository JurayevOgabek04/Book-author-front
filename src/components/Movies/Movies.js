import axios from "axios";
import { useState, useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { AuthContext } from "../../context/Authcontext";
import "./movies.css"
export const Movies = ({ data }) => {
    const params = useParams()
    const token = useContext(AuthContext)
    const [author, setAuthor] = useState([])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${data.author_id}`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setAuthor(res.data))
    }, [data.author_id])


    if (params.books === "books") {
        var title = (`${data.title}`)
        var text = (`${author.first_name} - ${author.last_name}`)
        var linkpage = "bookpage"
        var alt = "Image Book"
    } else {
        var title = (`${data.first_name} ${data.last_name}`)
        var text = (`${data.date_of_birth} - ${data.date_of_death}`)
        var linkpage = "singepage"
        var alt = "Image Author"
    }


    return (
        <Link to={`/${linkpage}/${data.id}`} className="card">
            <div className="card__img__div">
                <img className="card__img" src={`https://book-service-layer.herokuapp.com/${data.image}`} alt={alt} />
            </div>
            <div className="card__inner">
                <h2 className="card__title">{title}</h2>
                <p>{text}</p>
            </div>
        </Link>
    )
}