import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const USPLASH_KEY = process.env.REACT_APP_USPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');

  const [images, setImages] = useState([]);
  console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${USPLASH_KEY}`,
    )
      .then((res) => res.json)
      .then((data) => {
        setImages([data, ...images]); //use JavaScript spread operator in order to pull elements from particullar array
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  console.log(process.env.REACT_APP_USPLASH_KEY);

  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
