import React, { useState, useEffect } from 'react';
import CreateCard from './components/cards'
import './App.css';
import axios from 'axios'


const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(response => {
        setData(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    data.map((item, index) => {
      return <CreateCard key={index} person={item} />
    })
  );
}

export default App;
