import './App.css';
import { useState } from 'react';


import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

const INITIAL_ANIMALS = [
  {
    id: 100,
    name: "Violet",
    species: "pitbull mix",
    isBookmarked: false
  },
  {
    id: 101,
    name: "Norman",
    species: "Pyrenees puppy",
    isBookmarked: false
  },
  {
    id: 102,
    name: "Juni",
    species: "Poodle",
    photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
    isBookmarked: false
  },
  {
    id: 103,
    name: "Sabine",
    species: "Dog",
    isBookmarked: false
  },
  {
    id: 104,
    name: "Paprika and Braven",
    species: "Kittens",
    photo: "https://www.felinefriendsofsammamish.com/app/pet/img/000359-008.jpg",
    isBookmarked: false
  }
];

function App() {
  const [animals, setAnimals] = useState(INITIAL_ANIMALS);

  const updateBookmark = (animalId) => {
    // iterate though animals & add bookmark: False
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        // return {...animal, isBookmarked: bookmarkBoolean};
        // animal.isBookmarked = !animal.isBookmarked;
        // copy the original animal object and update it
        let animal2 = {...animal};
        animal2.isBookmarked = !animal.isBookmarked;
        return animal2
        // this is the same code 
        // return {...animal, isBookmarked: !animal.isBookmarked}
      } else {
        return {...animal}
      }
    })

    setAnimals(updatedAnimals);
  }

  const updateDelete = (animalId) => {
    const updatedAnimals = animals.map(animal => {
      if (animal.id !== animalId) {
        return {...animal}
      } 
    });
    // replacing animal with an undefined

    const filteredUpdatedData = updatedAnimals.filter(function (element) {
      return element !== undefined;
    });

    setAnimals(filteredUpdatedData);
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
