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
   
  	const response = await fetch(`https://api.themoviedb.org/3/movie/${source}?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US`);
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

// https://api.themoviedb.org/3/movie/${source}/reviews?api_key=e2df83ac84acb977bef0b1fd007c11ad&language=en-US&page=1
// https://api.themoviedb.org/3/review/5adff809c3a3683daa00ad3d?api_key=e2df83ac84acb977bef0b1fd007c11ad