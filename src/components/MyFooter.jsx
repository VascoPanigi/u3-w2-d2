import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";

const MyFooter = () => (
  <footer>
    <Container fluid>
      <Row className=" text-white p-4">
        <Col>
          <Stack>
            <Image
              src="https://images.unsplash.com/photo-1712741042337-124ff2469441?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="company logo"
              width={150}
            />
            <h2>CompanyName</h2>
            <p>Company tagline</p>
          </Stack>
        </Col>
        <Col>
          <Nav className="flex-column fs-5">
            <NavLink href="#" className="text-white">
              ciao
            </NavLink>
            <NavLink href="#" className="text-white">
              ciaone
            </NavLink>
            <NavLink href="#" className="text-white">
              ciao
            </NavLink>
            <NavLink href="#" className="text-white">
              ciaone
            </NavLink>
          </Nav>
        </Col>
        <Col>
          <h4>contact us</h4>
          <p>gerryscotti@tantoriso.com</p>
          <p>954 1616117 </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default MyFooter;
