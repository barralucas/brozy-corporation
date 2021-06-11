import { Container } from "./styles";
import robotImg from '../../assets/robot.jpg';



export function Profile() {
    return (
        <Container>
            <img className="robot-img" src={robotImg} alt="robo" />
            <h1>The Brozy Corporation</h1>
        </Container>
    );
}