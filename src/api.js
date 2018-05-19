export const fetchData = async () => {
  try {
  	console.log("API called");
  	const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2a066a2746744cf3977fd1db7beae696");
    const data = await response.json();
    console.log("fetchData",data);
    return data.articles;
  } catch (e) {
    console.log(e);
  }
};


export const fetchSourceData = async (source) => {
  try {
    console.log("fetchSourceData ---->",source);
  	const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=2a066a2746744cf3977fd1db7beae696`);
    const data = await response.json();
    
    return data.articles;
  } catch (e) {
    console.log(e);
  }
};

// https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=2a066a2746744cf3977fd1db7beae696