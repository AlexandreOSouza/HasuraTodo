import { useUser } from "@auth0/nextjs-auth0"
import { Col, Container, Row } from "react-bootstrap"

const Content = () => {

    const { user } = useUser()

    return (

        <Container fluid>
            <Row>
                <Col xs={12} className="justify-content-md-center">
                    <h1>Hello {user?.name}</h1>
                </Col>
            </Row>
            
        </Container>

        
    )
}

export default Content
