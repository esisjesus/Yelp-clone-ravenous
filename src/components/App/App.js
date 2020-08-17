import React,{useState} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import {Yelp} from '../../util/Yelp'


function App() {
  const [businesses, setBusisesses]= useState([])
  const [loading, setLoading] = useState(false);

  async function searchYelp(term, location, sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    setLoading(true);
    const response = await Yelp.search(term, location, sortBy);
    setBusisesses(response)
    setLoading(false);
  }

  return (
    
    <div className="App">
      {loading && <div className="loading" />}
    <h1>Ravenous</h1>
    <SearchBar searchYelp={searchYelp}/>
    <BusinessList businesses ={businesses}/>
  </div>
  );
}

export default App;
