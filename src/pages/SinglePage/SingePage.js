import axios from "axios";
import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { MoviesUl, BookLi } from "../../components";
import { AuthContext } from "../../context/Authcontext";
import "./singlepage.css"



export const SinglePage = () => {
    const token = useContext(AuthContext)
    const { id } = useParams()
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setAuthor(res.data))

        axios.get(`https://book-service-layer.herokuapp.com/book/genreId/3`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setBooks(res.data))
    }, [id])


    return (
        <div className="single">
            <div>
                <div className="single__img__div">
                    <img className="single__img" src={`https://book-service-layer.herokuapp.com/${author.image}`} alt="image Author" />
                </div>

                <div className="d-flex align-items-center ms-5 hero">
                    <div className="me-4">
                        <h4 className="data__title">Tavallud sanasi</h4>
                        <p className="data__time">{author.date_of_birth}</p>

                    </div>
                    <span className="line"> </span>
                    <div className="ms-4">
                        <h4 className="data__title">Vafot etgan sanasi</h4>
                        <p className="data__time">{author.date_of_death}</p>
                    </div>
                </div>
            </div>
            <div className="single__inner">
                <h1 className="single__title">{`${author.first_name} ${author.last_name}`}</h1>
                <p className="single__bio">{author.bio}</p>

                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className="book__title">Asarlari</p>
                        <NavLink to="/books" className="book__link me-5">Barchasini ko'rish</NavLink>
                    </div>

                    <div className="single__book">
                        {books.length && (
                            <MoviesUl>
                                {
                                    books.map(el => <BookLi key={el.id} data={el} />)
                                }
                            </MoviesUl>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )


}