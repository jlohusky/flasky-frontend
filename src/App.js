import logo from './logo.svg';
import './App.css';

import Animal from './components/Animal';

function App() {
  // comments outside the JSX (but still in JavaScript)
  return (
    <section>
      <h1>The Sappire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      {/* I want to list a bunch of animals... */}
      {/* Each animals has its name and photo */}
      <Animal></Animal>
    </section>
  );
}

export default App;
