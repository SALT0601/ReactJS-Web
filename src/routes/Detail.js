import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"
import Navbar from "../components/Navbar.js"


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
        <div style={{textAlign: "center"}}>
            {loading ? <div style={{ color:"#ececec", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontWeight: 300}}><p><b>Loading...</b></p></div> :
                <div>
                    <Navbar />
                   
                    <div  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h1 style={{color:"#ececec"}}>{movie.title_long}</h1>
                        
                        <strong>
                            <span style={{color:"#ececec", fontSize: 15}}>Genre: {movie.genres.map((genre, index) => <span key={index}>{index < (movie.genres.length-1) ? `${genre}, ` : `${genre}`}</span>)}</span>
                            <p style={{ color:"#ececec", margin: 5}}>평점: {movie.rating} / 10</p>
                        </strong>
                        <img alt="movie-cover" src={movie.medium_cover_image}></img>
                        <p style={{ color:"#ececec", width: "70%"}}>{movie.description_full}</p>
                        
                    </div>
                </div>
            }
        </div>
    )
}

export default Detail
  