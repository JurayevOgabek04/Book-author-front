import "./moviesul.css"

export const MoviesUl = ({ children }) => {
    return (
        <ul className="moviesList">{children}</ul>
    )
}