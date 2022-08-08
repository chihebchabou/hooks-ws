import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  const [isVisible, setIsVisisble] = useState(false);
  //     getter       setter                   initial value

  const toggleVisibility = () => {
    setIsVisisble(!isVisible);
  };

  // Event Handler
  const onClick = e => {
    console.log(e.target);
    toggleVisibility();
  };

  return (
    <div className="App">
      <h1>Workshop React Hooks</h1>
      <button className="visibility-btn" onClick={onClick}>
        {isVisible ? 'Hide Counter' : 'Show Counter'}
      </button>
      {isVisible && <Counter />}
    </div>
  );
};

export default App;
