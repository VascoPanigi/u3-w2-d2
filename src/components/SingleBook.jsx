import React, { useState } from "react";

import { Col, Card, Badge, Form, Button } from "react-bootstrap";

const SingleBook = ({ book, mySelectedBook, selectedBookAsin }) => {
  const { asin, img, title, category, price } = book;

  const [comment, setComment] = useState("");
  const [rate, setRating] = useState("1");

  const handleClick = () => {
    mySelectedBook(asin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the data object to be sent in the POST request
    const data = {
      comment: comment,
      rate: rate,
      elementId: asin,
    };

    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWM0YjI4MzJlODAwMTk4NzMwYWYiLCJpYXQiOjE3MTQzOTYyMzUsImV4cCI6MTcxNTYwNTgzNX0.c1_gssU17LfySu377xtrqmuUnlpDSubn-cE1Hfq-jBQ";
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to post review, sad Gabibbo dance");
      }

      setComment("");
      setRating("1");

      //aggiungere roba visiva per dire EUREKA
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    // <div className="single-book">
    <Col xs={6} md={4} onClick={handleClick} className="mb-3">
      <Card key={asin} className="b-0">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mb-2">{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="m-0">{category}</Card.Text>
            <Badge bg="dark" pill>
              {price} $
            </Badge>
          </div>
          {selectedBookAsin !== null && selectedBookAsin === asin && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-2">
                <Form.Control
                  type="text"
                  placeholder="Write a review"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)} // Update the comment state
                />{" "}
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Select aria-label="Default select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="3">Four</option>
                  <option value="3">Five</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Col>
    // </div>
  );
};

export default SingleBook;
