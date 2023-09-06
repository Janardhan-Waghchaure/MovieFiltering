import { useState } from "react";
import "./App.css"


import { motion, AnimatePresence } from "framer-motion";

import Border from "./Components/Border.js";
import data from "./data.js";
import Search from "./Components/Search.js";
import Filter from "./Components/Filter.js";

function App() {

  const [movies, setMovies] = useState(data);
  const [filteredMovies, setFilteredMovies] = useState(data);
  const [genre, setGenre] = useState("All");

  const fevoriteClickHandler = (name) => {
    let updatedMovies = [];
    movies.forEach(
      movie => {
        if (movie.name === name) {
          updatedMovies.push({ ...movie, isFevorite: !movie.isFevorite })
        }
        else {
          updatedMovies.push(movie);
        }
      }
    )
    setFilteredMovies(updatedMovies);
    setMovies(updatedMovies);
  };

  console.log(filteredMovies);

  const Main = () => {
    return (
      <AnimatePresence>
        <motion.div
          layout
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >

          {
            filteredMovies.map(movie =>
              <div key={movie.img} className="movie">
                <div className="movie_header">
                  <span>{movie.name}</span>
                </div>
                <span className={"subscription " + movie.subPlan}>
                  {"" + movie.subPlan}
                </span>
                <img src={movie.isFevorite ? require("./Icons/fevoritePink.png") : require("./Icons/fevoriteOutline.png")} onClick={() => fevoriteClickHandler(movie.name)} className="fevorite" />
                <img src={require("" + movie.img)} className="poster" />

                <div className="ratings">
                  <img className="imdb_rating" src = {require("./Icons/imdb_image.png")}  />
                  <span>3/10</span>
                  <img className="roton_tomatos" src = {require("./Icons/rotton_tomato.png")}  />
                  <span>6/10</span>
                  
                  <img className="views" src = {require("./Icons/views.png")}  />
                  <span>1.3M</span>

                </div>
              </div>
            )
          }

        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="container">
      <Filter setGenre={setGenre} movies={movies} setFilteredMovies={setFilteredMovies} />
      <Search movies={movies} setFilteredMovies={setFilteredMovies} />
      <Border Main={<Main />} />
    </div>
  );
}

export default App;
