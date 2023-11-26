import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const App= () => {
  const [hello, setHello] = useState('');
  const [input, setInput] = useState('Portugal')

  useEffect (() => {
    // Fetch data from my backend
    fetch(process.env.REACT_APP_BACKEND_API + input)
      .then((response) => response.text())
      .then((data) => {
        setHello(data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [])

  return (
    <div className="App">
      <h1>{hello}</h1>
    </div>
  );
}

export default App;
