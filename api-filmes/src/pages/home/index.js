import { Container } from "./styles";

function Home(){
    return(
        <Container>
            <h1>Movies</h1>
            <ul>
                <li>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img>
                    <span>Spider man</span>
                </li>
                <li>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img>
                    <span>Spider man</span>
                </li>
                <li>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_866792-MLB32711553663_102019-O.jpg" alt="spiderman"></img>
                    <span>Spider man</span>
                </li>
            </ul>
        </Container>
        
    )
}

export default Home;