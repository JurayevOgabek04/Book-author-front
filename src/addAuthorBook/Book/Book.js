import axios from "axios"
import { AuthContext } from "../../context/Authcontext"
import { useRef, useContext } from "react"
import "./book.css"

export const Book = () => {
    const token = useContext(AuthContext)


    const elTitle = useRef("")
    const elPage = useRef('')
    const elYear = useRef("")
    const elPrice = useRef("")
    const elGenre = useRef("")
    const elAuthor = useRef("")
    const elDescription = useRef("")
    const elImage = useRef("")

    const handelForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()


        formdata.append("title", elTitle.current.value);
        formdata.append("page", elPage.current.value);
        formdata.append("year", elYear.current.value);
        formdata.append("price", elPrice.current.value);
        formdata.append("genre_id", elGenre.current.value)
        formdata.append("author_id", elAuthor.current.value);
        formdata.append("description", elDescription.current.value)
        formdata.append("image", elImage.current.files[0])

        axios.post("https://book-service-layer.herokuapp.com/book", formdata, {
            headers: {
                Authorization: token.token
            }
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    return (
        <div className="settings">
            <form className="form" onSubmit={handelForm}>
                <h1>Add Book</h1>
                <input ref={elTitle} className="form-control mb-3" type="text" placeholder="Enter  Book Title" required />
                <input ref={elPage} className="form-control mb-3" type="number" placeholder="Enter Book Page" required />
                <input ref={elYear} className="form-control mb-3" type="number" placeholder="Enter Book release Year" required />
                <input ref={elPrice} className="form-control mb-3" type="text" placeholder="Enter Book Price" required></input>
                <select ref={elGenre} className="form-control mb-3">
                    <option value="1">Temuriylar</option>
                    <option value="2">Jadid</option>
                    <option value="3">Sovet</option>
                    <option value="4">Mustaqillik</option>
                </select>
                <input ref={elAuthor} className="form-control mb-3" type="text" placeholder="Enter Author Id" required />
                <textarea ref={elDescription} className="form-control mb-3" type="text" placeholder="Enter Book description" required />
                <input ref={elImage} className="add__image" type="file" required />

                <button type="submit" className="add__btn">Submit</button>
            </form>
        </div>

    )
}