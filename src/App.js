import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import AnimalList from './components/AnimalList';

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect( () => {
    axios.get('http://127.0.0.1:5000/animals')
    .then( (response) => {
      const initialAnimalData = [];
      response.data.forEach(animal => {
        initialAnimalData.push(animal);
      })
      
      setAnimals(initialAnimalData);
    })
    .catch( (error) => {
      console.log('error', error)
    })
  }, [])

  const updateBookmark = (animalId) => {
    // iterate though animals & add bookmark: False
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        return {...animal, isBookmarked: !animal.isBookmarked}
      } else {
        return {...animal}
      }
    })

    setAnimals(updatedAnimals);
  }

  const updateDelete = (animalId) => {
    axios.delete(`http://127.0.0.1:5000/animals/${animalId}`)
      .then( (response) => {
        const updatedAnimals = animals.map((animal) => {
          if (animal.id !== animalId) {
            return {...animal}
          } 
        });
        const filteredUpdatedData = updatedAnimals.filter(function (element) {
          return element !== undefined;
        });
        
        setAnimals(filteredUpdatedData);
      })
      .catch( (error) => {
        console.log('could not delete animal', error, error.response)
      });
  }

  return (
    <section>
      <h1>The Sappire Animal Adoption Agency</h1>
      <AnimalList 
      listOfAnimals={ animals } 
      updateBookmark={updateBookmark}
      updateDelete={updateDelete}
      ></AnimalList>
    </section>
  );
}

export default App;
