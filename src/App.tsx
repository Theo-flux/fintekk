import React from 'react';
import {
  Brands,
  Footer,
  Hero,
  Nav,
  NewsLetter,
  Activeusers,
} from './components';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Brands />
      <Activeusers />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
