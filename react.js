// src/product.js
const movies = [
    {
      name: "Movie 1",
      price: "$9.99",
      description: "Description of Movie 1.",
      trailerLink: "https://www.youtube.com/embed/trailer1"
    },
    {
      name: "Movie 2",
      price: "$14.99",
      description: "Description of Movie 2.",
      trailerLink: "https://www.youtube.com/embed/trailer2"
    },
    // Add more movies here as needed
  ];
  
  export default movies;
  // src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import movies from "./product";

const MovieCard = ({ movie }) => (
  <Card style={{ width: "18rem", margin: "auto", marginTop: "2rem" }}>
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>Price: {movie.price}</Card.Text>
      <Link to={`/movies/${movie.name}`}>See Details</Link>
    </Card.Body>
  </Card>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Container>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </Container>
        </Route>
        <Route path="/movies/:name">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
};

const MovieDetails = () => {
  const { name } = useParams();
  const movie = movies.find(movie => movie.name === name);
  return (
    <Container>
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title="Movie Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Button variant="primary" href="/">Back to Home</Button>
    </Container>
  );
};

export default App;
npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
