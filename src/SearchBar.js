import React, {useState} from 'react'; 
import search from './utils/utils'; 

function SearchBar({onSearchResult}) {
  // Search terms ("term") and location ("location") 
  // Sorting options: best match, highest rated, most reviewed

  // State variables 
  const [term, setTerm] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [sort, setSort] = useState("best_match"); 

  function handleChange({target}) {
    if (target.name === "terms") {
      setTerm(target.value); 
    } else if (target.name === "location") {
      setLocation(target.value); 
    }
  }

  function handleRadioBtnClick({target}) {
    setSort(target.value); 
  }

  async function handleSubmit(event) {
    event.preventDefault(); 
    const data = await search(term, location, sort); 
    onSearchResult(data.businesses); // pass data to App
  }

  return (
  <form onSubmit={handleSubmit}>
  {/* Radio Buttons to select sorting type */}
        <input type="radio" name="sort" value="best_match" id="best_match" checked={sort === "best_match"} onChange={handleRadioBtnClick} />
        <label htmlFor="best_match">Best Match</label>
        
        <input type="radio" name="sort" value="rating" id="rating" checked={sort === "rating"} onChange={handleRadioBtnClick} /> 
        <label htmlFor="rating">Highest Rated</label>
        
        <input type="radio" name="sort" value="review_count" id="review_count" checked={sort === "review_count"} onChange={handleRadioBtnClick} />
        <label htmlFor="review_count">Most Viewed</label>
  <br />    
  {/* Search bars */}
  <input type="text" name="terms" placeholder="Search Terms" value={term} onChange={handleChange} /> 
  <input type="text" name="location" placeholder="Location" value={location} onChange={handleChange} />
  <br />
  <button type="submit">Submit</button>
  </form> ); 
}

export default SearchBar; 