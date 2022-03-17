export const SingleMovieDetails = () => {


    // make a request to get the details

    useEffect(() => {
      axios.get("https://movie-fake-server.herokuapp.com/data")
    .then((res) => setLists(res.data))
    .catch((err) => console.log(err));
  
  
      //   dispatch an action to the store 
  
    }, []);

  return (
  <>
  
  </>);
};
