import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"


function Detail() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    const getMovie = useCallback(async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json()
        setMovie(json.data.movie)
        setLoading(false)
    }, [id])
    useEffect(() => {
        getMovie()
    }, [getMovie])
    return (
        <div>
            {loading ? <div><img alt="loading"  /><p><b>Loading...</b></p></div> :
                <div>
                   
                    <div >
                        <h1>{movie.title_long}</h1>
                        <strong>
                            <span>Genre: {movie.genres.map((genre, index) => <span key={index}>{index < (movie.genres.length-1) ? `${genre}, ` : `${genre}`}</span>)}</span>
                            <p>평점: {movie.rating} / 10</p>
                        </strong>
                        <p >{movie.description_full}</p>
                        <img alt="movie-cover" src={movie.medium_cover_image}></img>
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail
  