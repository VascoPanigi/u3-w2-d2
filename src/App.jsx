import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
// import BookListHooks from "./components/BookListHooks";
import BookListClass from "./components/BookListClass";

class App extends Component {
  state = {
    selectedBook: null,
    comments: [],
  };

  fetchComments = async (asin) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWM0YjI4MzJlODAwMTk4NzMwYWYiLCJpYXQiOjE3MTQzOTYyMzUsImV4cCI6MTcxNTYwNTgzNX0.c1_gssU17LfySu377xtrqmuUnlpDSubn-cE1Hfq-jBQ";
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();

      this.setState({ comments: data });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  handleSelectedBook = (asin) => {
    this.setState({ selectedBook: asin });
    this.fetchComments(asin);
  };

  render() {
    return (
      <div className="App">
        <header className="bg-dark">
          <MyNavbar />
        </header>
        <main className="bg-dark">
          <MyHero />
          {/* <BookListHooks /> */}
          <BookListClass
            mySelectedBook={this.handleSelectedBook}
            comments={this.state.comments}
            selectedBookAsin={this.state.selectedBook}
          />
        </main>
        <footer className="bg-dark">
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
