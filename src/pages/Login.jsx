import {Login as LoginComponent} from "../components/Login.jsx";
import {Container} from "../components/containor/Container.jsx";

export const Login = () => {
    return (
        <Container>
            <div className="py-8">
               <LoginComponent />
            </div>
        </Container>
    )
}