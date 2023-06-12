import logo from './logo.svg';
import './App.css';

import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

function App() {
  // comments outside the JSX (but still in JavaScript)
  return (
    <section>
      <h1>The Sappire Animal Adoption Agency</h1>
      <AnimalList></AnimalList>
    </section>
  );
}

export default App;
