import { useUser } from "@auth0/nextjs-auth0";
import { Navbar, Button, Container } from "react-bootstrap";

const Nav = () => {
    const { user, isLoading } = useUser();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Auth0 - React</Navbar.Brand>
                <Button
                    variant="primary"
                    className="btn-margin"
                >Home</Button>

                {user ? (
                    <Button
                        variant="primary"
                        className="btn-margin"
                    ><a href="/api/auth/logout">Logout</a>
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        className="btn-margin"
                    ><a href="/api/auth/login">Login</a>
                    </Button>
                )}

            </Container>
        </Navbar>
    )
}

export default Nav;