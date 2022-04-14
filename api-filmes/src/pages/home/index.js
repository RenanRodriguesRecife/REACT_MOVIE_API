import { Container, MoveList } from "./styles";

function Home(){
    return(
        <Container>
            <h1>Movies</h1>
            <MoveList>
                <li>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img></a>
                    <span>Spider man</span>
                </li>
                <li>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img></a>
                    <span>Spider man</span>
                </li>
                <li>
                    <a href="#"><img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img></a>
                    <span>Spider man</span>
                </li>
            </MoveList>
        </Container>
        
    )
}

export default Home;