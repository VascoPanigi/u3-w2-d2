import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="mt-5">
        {fantasy.map((book) => (
          <Col xs={6} sm={4} md={3} lg={2}>
            <Card key={book.asin} className="b-0">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title className="mb-2">{book.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text className="m-0">{book.category}</Card.Text>
                  <Badge bg="dark" pill>
                    {book.price} $
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
