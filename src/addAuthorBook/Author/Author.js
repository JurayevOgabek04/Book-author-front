import axios from "axios"
import { useRef, useContext } from "react"
import { AuthContext } from "../../context/Authcontext"
import "./author.css"

export const Author = () => {

    const token = useContext(AuthContext)

    const elFrist = useRef("")
    const elLast = useRef('')
    const elBirth = useRef("")
    const elDeath = useRef("")
    const elCountry = useRef("")
    const elGenre = useRef("")
    const elBio = useRef("")
    const elFoto = useRef("")

    const handelForm = (evt) => {
        evt.preventDefault()
        const formdata = new FormData()

        formdata.append("first_name", elFrist.current.value);
        formdata.append("last_name", elLast.current.value);
        formdata.append("date_of_birth", elBirth.current.value);
        formdata.append("date_of_death", elDeath.current.value);
        formdata.append("country", elCountry.current.value);
        formdata.append("genre_id", elGenre.current.value)
        formdata.append("bio", elBio.current.value)
        formdata.append("image", elFoto.current.files[0])

        axios.post("https://book-service-layer.herokuapp.com/author", formdata, {
            headers: {
                Authorization: token.token
            }
        })
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    return (
        <div className="d-flex align-items-center settings">

            <form className="form" onSubmit={handelForm}>
                <h1>Add Author</h1>
                <input ref={elFrist} className="form-control mb-3" type="text" placeholder="Enter  Frist Name" required />
                <input ref={elLast} className="form-control mb-3" type="text" placeholder="Enter Last Name" required />
                <input ref={elBirth} className="form-control mb-3" type="text" placeholder="Enter Data Of Birth" required />
                <input ref={elDeath} className="form-control mb-3" type="text" placeholder="Enter Data Of Death" required />
                <input ref={elCountry} className="form-control mb-3" type="text" placeholder="Enter Country" required />
                <select ref={elGenre} className="form-control mb-3">
                    <option value="1">Temuriylar</option>
                    <option value="2">Jadid</option>
                    <option value="3">Savet</option>
                    <option value="4">Mustaqillik</option>
                </select>
                <textarea ref={elBio} className="form-control mb-3" type="text" placeholder="Enter bio" required />
                <input ref={elFoto} className="image" type="file" required />

                <button type="submit" className="create__btn mt-3">Create</button>
            </form>
        </div>

    )
}