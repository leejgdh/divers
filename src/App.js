import './App.css';
import * as React from 'react';
import Stratagem from './components/stratagem';
import CommandView from './components/command-view';

function App() {
  const [selectedStratagems, setSelectedStratagems] = React.useState([]);

  return (
    <div className="App">
      <CommandView selectedStratagems={selectedStratagems} setSelectedStratagems={setSelectedStratagems} />
      <hr />
      <Stratagem setSelectedStratagems={setSelectedStratagems} />
    </div>
  );

}

export default App;
