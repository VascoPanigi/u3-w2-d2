import React, { Component } from "react";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import CommentArea from "./CommentArea";

class BookListClass extends Component {
  // state = {
  //   searchValue: "",
  //   filteredBooks: fantasy,
  // };

  // handleSearch = (e) => {
  //   const searchValue = e.target.value.toLowerCase();
  //   this.setState({ searchValue });

  //   const filteredBooks = fantasy.filter((book) => book.title.toLowerCase().includes(searchValue));
  //   this.setState({ filteredBooks });
  // };

  render() {
    // const { searchValue, filteredBooks } = this.state;
    return (
      <Container>
        {/* <Form className="mt-5">
          <FormControl type="text" placeholder="Search a book..." onChange={this.handleSearch} value={searchValue} />
        </Form> */}
        <Row className="mt-5">
          <Col xs={7}>
            <Row>
              {/* {filteredBooks.map((book) => (
                <SingleBook key={book.asin} book={book} />
              ))} */}
              {fantasy.map((book) => (
                <SingleBook
                  key={book.asin}
                  book={book}
                  mySelectedBook={this.props.mySelectedBook}
                  selectedBookAsin={this.props.selectedBookAsin}
                />
              ))}
            </Row>
          </Col>
          <Col xs={5}>
            <CommentArea comments={this.props.comments} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookListClass;
