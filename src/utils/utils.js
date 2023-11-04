import apiKey from './apiKey'; 

const url = "https://api.yelp.com/v3/businesses/search?";
const corsFix = "https://cors-anywhere.herokuapp.com/";  // adds CORS headers to the response from the API to bypass CORS restrictions

const init = {
  method: "GET", 
  headers: {
    "accept": "application/json",
    "Authorization": `Bearer ${apiKey}`, 
  }
};

async function search(term, location, sortBy) {
  const urlTerm = `term=${term}`;
  const urlLocation = `location=${location}`; 
  const urlSortBy = `sort_by=${sortBy}`; 
  const endpoint = corsFix + url + urlTerm + "&" + urlLocation + "&" + urlSortBy + "&limit=20"; 

  try {
    const response = await fetch(endpoint, init); 
    if (response.ok) {
      const jsonResponse = await response.json(); 
      return jsonResponse; 
    }
  } catch (error) {
    console.log(error); 
  }
}

export default search; 