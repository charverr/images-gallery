import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
const USPLASH_KEY = process.env.REACT_APP_USPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');

  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${USPLASH_KEY}`,
    )
      .then((res) => res.json)
      .then((data) => {
        setImages([{ ...data,title:word}, ...images]); //use JavaScript spread operator in order to pull elements from particullar array
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  const HandleDeleteImage = (id) =>{
    setImages(images.filter((image) => image.id !==id));
  };


  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i)=>(
            <Col key={i} classname="pb-3">
              <ImageCard image={image} deleteImage={HandleDeleteImage} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
