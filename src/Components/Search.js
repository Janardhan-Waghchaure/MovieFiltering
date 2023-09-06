import { useEffect, useState } from "react";
import "../CSS/Search.css";

function Search({movies, setFilteredMovies}){


    const onChangeHandler = async (e) => {
        if (e.target.value === ""){
            setFilteredMovies(movies);
        }
        else{
            let searchResult = [];
            movies.forEach(
                movie => {
                    let pos = movie.name.search(e.target.value);
                    if (pos !== -1){
                        searchResult.push(movie);
                    }
                }
            )
            setFilteredMovies(searchResult);
        }
    }

    return (
        <div className="search">
            <input type="search" onChange={onChangeHandler} placeholder="Search"/>
        </div>
    );
}

export default Search;