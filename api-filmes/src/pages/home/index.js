import { Container, MoveList, Movie } from "./styles";

function Home(){
    return(
        <Container>
            <h1>Movies</h1>
            <MoveList>
                <Movie>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img></a>
                    <span>Spider man</span>
                </Movie>
                <Movie>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img></a>
                    <span>Spider man</span>
                </Movie>
                <Movie>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img></a>
                    <span>Spider man</span>
                </Movie>
            </MoveList>
        </Container>
        
    )
}

export default Home;