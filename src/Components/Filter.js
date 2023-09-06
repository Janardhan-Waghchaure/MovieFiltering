import { useState } from "react";
import "../CSS/Filter.css";
function Filter({setGenre , movies , setFilteredMovies}){

    const [tabs , setTabs] = useState([
        {name : "All" , class : "active"} , 
        {name : "Fevorites" , class : "fevorites"} , 
        {name : "Action" , class : ""} , 
        {name : "Adventure" , class : ""} , 
        {name : "Horror" , class : ""} , 
        {name : "Drama" , class : ""} , 
        {name : "Romantic" , class : ""} , 
        {name : "Suspense" , class : ""} , 
    ]);

    const clickHanlder = (name) => {
        setGenre(name);
        
        const newTabs = [];

        // if fevorite button is clicked
        if (name === "Fevorites"){
            tabs.forEach(
                tab => {
                    if (tab.name !== "Fevorites"){
                        newTabs.push({...tab , class : ""})
                    }
                    else {
                        newTabs.push(tab)
                    }
                }
            )
            
            setTabs(newTabs);

            const filteredResult = [];
            movies.forEach(
                movie => {
                    if (movie.isFevorite){
                        filteredResult.push(movie)
                    }
                }
            );
            setFilteredMovies(filteredResult);
            return;
        }

        

        tabs.forEach(
            tab => {
                if (tab.name === "Fevorites"){
                    // dont change color of fevorite tab.
                    newTabs.push(tab)
                }
                else if (tab.name === name){
                    newTabs.push({...tab , class : "active"})
                }
                else {
                    newTabs.push({...tab , class : ""})
                }
            }
        );
        setTabs(newTabs);

        if (name === "All"){
            setFilteredMovies(movies);
        }
        else {
            let filteredResult = [];
            movies.forEach(
                movie => {
                    if (movie.genres.includes(name)){
                        filteredResult.push(movie);
                    }
                }
            )
            setFilteredMovies(filteredResult);
        }
    }

    return (
        <div className="filter">
            {
                tabs.map(
                    tab => <span key={tab.name} className={tab.class} onClick={(e)=>clickHanlder(tab.name )}> {tab.name} </span>
                )
            }
        </div>
    );
}

export default Filter;