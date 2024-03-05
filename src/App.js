import './App.css';
import * as React from 'react';
import Stratagem from './components/stratagem';
import CommandView from './components/command-view';

function App() {
  const [selectedStratagems, setSelectedStratagems] = React.useState([
    {
      id: 48,
      name: "증원",
      commands: "w,s,d,a,w",
      category: "mission"
    },
    {
      id: 49,
      name: "재보급",
      commands: "s,s,w,d",
      category: "mission"
    }
  ]);

  return (
    <div className="App">
      <CommandView selectedStratagems={selectedStratagems} setSelectedStratagems={setSelectedStratagems} />
      <hr />
      <Stratagem setSelectedStratagems={setSelectedStratagems} />
    </div>
  );

}

export default App;
