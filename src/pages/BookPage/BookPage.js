import axios from "axios";
import { NavLink, Outlet, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { BookLi, MoviesUl } from "../../components";
import { AuthContext } from "../../context/Authcontext";
import "./bookpage.css"




export const BookPage = () => {
    const token = useContext(AuthContext)
    const { id } = useParams()
    const [book, setBook] = useState([])
    const [author, setAuthor] = useState([])
    const [genre, setGenre] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/book/bookId/${id}`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setBook(res.data))

        axios.get(`https://book-service-layer.herokuapp.com/genre`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setGenre(res.data))
    }, [id])

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/book/genreId/${genre[book.genre_id - 1]?.id}`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setBooks(res.data))


        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${book.author_id}`, {
            headers: {
                Authorization: token.token
            }
        })
            .then(res => setAuthor(res.data))
    }, [genre[book.genre_id - 1]?.id, book.author_id])

    return (
        <div className="books">
            <div className="book">
                <div className="book__hero">
                    <img className="book__img" src={`https://book-service-layer.herokuapp.com/${book.image}`} alt="image Book" />
                </div>
                <div className="book__inner">
                    <h1 className="book__title">{book.title}</h1>
                    <p className="book__subtitle">{`${author.first_name} ${author.last_name}`}</p>
                    <p className="book__info">Sahifalar soni:
                        <span className="book__info__span">{book.page}</span>
                    </p>
                    <p className="book__info">Chop etilgan:
                        <span className="book__info__span">{book.year}</span>
                    </p>
                    <p className="book__info">Janri:
                        <span className="book__info__span">{genre[book.genre_id - 1]?.name}</span>
                    </p>

                    <div className="description">
                        <div className="book__div">
                            <h1 className="book__div__title">To'liq ma'lumot ↓</h1>
                            <p className="book__div__span"></p>
                        </div>

                        <p className="book__description mt-3">{book.description}</p>
                    </div>

                    <p className="book__format">Mavjud Farmatlar</p>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div>
                            <p className="ms-4 mb-1">📔</p>
                            <span className="format__title">Qog'oz kitob</span>

                            <p className="book__sena mt-2">{book.price} - dollor</p>
                        </div>
                        <div className="ms-5">
                            <p className="ms-4 mb-1">🎧</p>
                            <span className="format__title">Audiokitob</span>

                            <p className="book__sena mt-2">{book.price} - dollor</p>
                        </div>
                        <div className="ms-5">
                            <p className="ms-4 mb-1">📱</p>
                            <span className="format__title">Elektron</span>

                            <p className="book__sena mt-2">{book.price} - dollor</p>
                        </div>

                        <button className="format__btn me-5">Javonga qo'shish </button>

                    </div>

                </div>
            </div>

            <div className="w-50 ms-3">
                <ul className="inner__page d-flex justify-content-between">
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'book__active__link' : "noactive__link"} to="">Muallif haqida</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'book__active__link' : "noactive__link"} to="kitobdan">Kitobdan iqtiboslar</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'book__active__link' : "noactive__link"} to="kitobxon">Kitobxonlar taqrizi</NavLink>
                    </li>
                </ul>
            </div>
            <div className="ms-5 me-5">
                <Outlet />
            </div>


            <div className="ms-5">
                <div className="d-flex align-items-center justify-content-between">
                    <p className="book__title">Sizga yoqishi mumkin</p>
                    <NavLink to="/books" className="book__link me-5">Barchasini ko'rish</NavLink>
                </div>
                <div className="knigi">

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
    )


}