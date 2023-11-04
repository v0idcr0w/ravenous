import React, {useState} from 'react'; 
import './App.css';
import BusinessList from './BusinessList'; 
import SearchBar from './SearchBar'; 


function App() {
  const [searchResults, setSearchResults] = useState([]); 
  //define a function that allows SearchBar to pass data back to App 
  function handleSearchResult(data) {
    setSearchResults(data); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearchResult={handleSearchResult} />
        <BusinessList bizzList={searchResults} />
      </header>
    </div>
  );
}

export default App;
