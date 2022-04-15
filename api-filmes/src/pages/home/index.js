import { Container, MoveList, Movie } from "./styles";
import { useState, useEffect } from 'react'
import { APIKey } from '../../config/key';

const image_path = 'https://image.tmdb.org/t/p/w500/'

function Home(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
    setMovies(data.results)
    })
  }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <MoveList>
                {movies?.map(movie => {
                    return(
                        <Movie key={movie.id}>
                <a href="#"><img src={`${image_path}/${movie.poster_path}`} alt={movie.title}></img></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MoveList>
        </Container>
        
    )
}

export default Home;