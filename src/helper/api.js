export const fetchData = async () => {
  try {
  	console.log("API called");
  	const response = await fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2a066a2746744cf3977fd1db7beae696");
    const data = await response.json();
    console.log("fetchData",data);
    return data.articles;
  } catch (e) {
    console.log(e);
  }
};


export const fetchSourceData = async (source) => {
  try {
    // console.log("fetchSourceData ---->",source);
  	const response = await fetch(`http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=2a066a2746744cf3977fd1db7beae696`);
    const data = await response.json();

    return data.articles;
  } catch (e) {
    console.log(e);
  }
};

export const fetchPopularData = async () => {
  try {

  	const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e2df83ac84acb977bef0b1fd007c11ad`);
    const data = await response.json();
    console.log("fetchPopularData ---->",data);
    return data.results;
  } catch (e) {
    console.log(e);
  }
};

export const fetchMoviesDetails = async (source) => {
  try {

  	const response = await fetch(`https://api.themoviedb.org/3/movie/${source}?api_key=e2df83ac84acb977bef0b1fd007c11ad&append_to_response=credits`);
    const data = await response.json();
    console.log("fetchMoviesDetails ---->",data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchMoviesReviews = async (source) => {
  try {

  	const response = await fetch(`https://api.themoviedb.org/3/movie/${source}/reviews?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1`);
    const data = await response.json();
    // console.log("fetchMoviesReviews ---->",data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchSearchResults = async (query) => {
  try {

  	const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e2df83ac84acb977bef0b1fd007c11ad&query=${query}&language=en-US&page=1&include_adult=false`);
    const data = await response.json();
    console.log("fetchSearchResults ---->",data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchHomeResults = async (query) => {
  try {
    // console.log("vikas fetchHomeResults ---->",query);
  	const response = await fetch(`https://api.themoviedb.org/3/trending/${query}/day?api_key=e2df83ac84acb977bef0b1fd007c11ad`);
    const data = await response.json();
    console.log(`vikas ${query} data ---->`,data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const fetchSimilarMovies = async (query) => {
  try {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${query}/similar?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1`);
      // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
      const data = await response.json();
      return data;


  } catch (e) {
    console.log(e);
  }
};

// https://api.themoviedb.org/3/movie/${source}/reviews?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1
// https://api.themoviedb.org/3/review/5adff809c3a3683daa00ad3d?api_key=e2df83ac84acb977bef0b1fd007c11ad