import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIKey } from '../../config/key';



function Details(){
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {
          const movie = {
              id,
              title: data.title,
              sinopse: data.overview,
              image: `${image_path}${data.poster_path}`,
              releaseDate: data.release_date
          }
          setMovie(movie)
          console.log(movie)
        })
      }, [id])
    return(
        <h1>Página de detalhes</h1>
    )
}

export default Details