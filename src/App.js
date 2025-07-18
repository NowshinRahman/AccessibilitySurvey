import React from 'react';
import AudioButton from './components/AudioButton';
import StarRating from './components/StarRating';
import Survey from './components/Survey';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarRating />
      <Survey />
    </div>
  );
}

export default App;
