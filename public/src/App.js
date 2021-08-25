import React from "react";
// import fondo from "./fondo.jpg"
import Favorites from "./components/Favorites/Favorites.jsx";
import Buscador from "./components/Buscador/Buscador.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie.jsx";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
function App() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <NavBar />
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </div>
  );
}

export default App;
