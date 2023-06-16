import './App.css';
import { useState } from 'react';


import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

const INITIAL_ANIMALS = [
  {
    id: 100,
    name: "Violet",
    species: "pitbull mix"
  },
  {
    id: 101,
    name: "Norman",
    species: "Pyrenees puppy"
  },
  {
    id: 102,
    name: "Juni",
    species: "Poodle",
    photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg"
  },
  {
    id: 103,
    name: "Sabine",
    species: "Dog",
  },
  {
    id: 104,
    name: "Paprika and Braven",
    species: "Kittens",
    photo: "https://www.felinefriendsofsammamish.com/app/pet/img/000359-008.jpg"
  }
];

function App() {
  const [animals, setAnimals] = useState(INITIAL_ANIMALS);

  const updateBookmark = (animalId, bookmarkBoolean) => {
    // iterate though animals & add bookmark: False
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        return {...animal, bookmark: bookmarkBoolean};
      } else {
        return {...animal}
      }
    })

    setAnimals(updatedAnimals);

  }

  return (
    <section>
      <h1>The Sappire Animal Adoption Agency</h1>
      <AnimalList 
      listOfAnimals={ animals } 
      updateBookmark={updateBookmark}
      ></AnimalList>
    </section>
  );
}

export default App;
