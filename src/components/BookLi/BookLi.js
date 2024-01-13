import axios from "axios";
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/Authcontext";
import "./bookli.css"
export const BookLi = ({ data }) => {
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


    return (
        <Link to={`/bookpage/${data.id}`} className="book__card">
            <div className="card__img__div">
                <img className="card__img" src={`https://book-service-layer.herokuapp.com/${data.image}`} alt="Image Book" />
            </div>
            <div className="card__inner">
                <h2 className="card__title">{data.title}</h2>
                <p>{`${author.first_name} - ${author.last_name}`}</p>
            </div>
        </Link>
    )
}