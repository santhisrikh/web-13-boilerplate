import axios from "axios";
import React, { useEffect, useState } from "react";
import './MovieList.css'
import { useDispatch } from "react-redux";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];


export const MoviesDashboard = () => {
  
  // const  dispatch = useDispatch()
  const [lists,setLists] = useState([]);
  
  //   // to get all movies list on component mounts

  useEffect(() => {
    //   dispatch an action to the store 

    axios.get("https://movie-fake-server.herokuapp.com/data")
  .then((res) => setLists(res.data))
  .catch((err) => console.log(err));
  }, []);

  // console.log("Movies",lists)

//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
}
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter} > 
      <h6>Movie</h6>
        {/* map through the filter  */}
        {
          genres.map((e) => {
           return(
            <h6>{e}</h6>
          )})
        }

       </select>
      <div className = "movies-list">
        
        {
          lists.map((elem) => {
            return(
              <div key={elem.id}>
                <h4> {elem.movie_name}</h4>
               <img src={elem.image_url} />
               <p>{elem.genre}</p>
              </div>
            )
          })
        }
       {/* map throught th movie list and display the results */}
      </div>
    </>
  );
};
