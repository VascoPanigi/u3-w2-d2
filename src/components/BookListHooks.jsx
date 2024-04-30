import React, { useState } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";

const BookListHooks = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setBooks] = useState(fantasy);

  const handleSearch = (e) => {
    // e.preventDefault()
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);

    const filteredBooks = fantasy.filter((book) => book.title.toLowerCase().includes(searchValue));
    setBooks(filteredBooks);
  };

  return (
    <Container>
      <Form>
        <FormControl
          type="text"
          placeholder="Search a book..."
          onChange={handleSearch}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          value={searchValue}
        />
      </Form>
      <Row className="mt-5">
        <Col xs={7}>
          <Row>
            {filteredBooks.map((book) => (
              <SingleBook key={book.asin} book={book} />
            ))}
          </Row>
        </Col>
        <Col xs={5}>
          <h1 className="text-white"></h1>
        </Col>
      </Row>
    </Container>
  );
};

export default BookListHooks;
