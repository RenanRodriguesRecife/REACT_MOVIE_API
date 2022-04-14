import { Container, MoveList, Movie } from "./styles";

function Home(){

    const movies = [
        {
            title: 'blade runner',
            image_url: 'https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg',
        },
        {
            title: 'blade runner',
            image_url: 'https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg',
        },
        {
            title: 'blade runner',
            image_url: 'https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg',
        }
    ]

    return(
        <Container>
            <h1>Movies</h1>
            <MoveList>
                {movies.map(movie => {
                    return(
                        <Movie>
                            <a href="#"><img src={movie.image_url} alt={movie.title}></img></a>
                            <span>{movie.title}</span>
                        </Movie>
                )
                })}
            </MoveList>
        </Container>
        
    )
}

export default Home;