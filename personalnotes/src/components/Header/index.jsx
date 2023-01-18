import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";


export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                src="https://github.com/felipesurfe.png" 
                alt="Foto do Usuário" 
                />
                
                <div>
                    <span>Bem Vindo!</span>
                    <strong>Felipe Fernandes</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

        </Container>
    );
}