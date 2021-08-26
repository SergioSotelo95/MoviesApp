import { InputBase } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteMovieList, sendTitle } from "../../actions/index.js";
import ShowMovies from "../ShowMovies/ShowMovies.jsx";
import "./Buscador.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


export default function Buscador() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
 
  // useEffect(() => {
  //   dispatch(getMovies("fireflies"))
  //   // eslint-disable-next-line
  // }, [dispatch])

  const handleChange = (e) => {
    setTitle(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendTitle(title));
  };

  const deleteMovies = () => {
    dispatch(deleteMovieList())
  }
 
  const classes = useStyles();
  return (

    <div>
          <h2>Buscador</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            {/* <div>
              <label className="label" htmlFor="title">
                Película:{" "}
              </label>
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={handleChange}
              />
            </div> */}
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <searchIcon />
            </div>
            <InputBase
              id="searchBar"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                
              }}
              value={title}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </div>
            <button type="submit">BUSCAR</button>
            <button onClick={deleteMovies}>Eliminar Búsquedas</button>
          </form>

         <ShowMovies/>
    </div>
  );
}
