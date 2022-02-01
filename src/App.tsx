import React, {useState} from 'react';
import { One, Two, Three } from './components'
import './App.css';

const examples = [
    {name: 'one', component: <One/>},
    {name: 'two', component: <Two/>},
    {name: 'three', component: <Three/>},
]

function App() {
  const [showExample, setShowExample] = useState(0)

  const handleShowExample = (index: number) => {
      setShowExample(index)
  }

  const showComponent = () => {
      return examples[showExample].component
  }

  return (
    <div className="App">
      {examples.map((example, index) => (
          <button key={index} onClick={() => handleShowExample(index)}>Show example {example.name}</button>
      ))}
      <div className={'example-container'}>
          {showComponent()}
      </div>
    </div>
  );
}

export default App;
