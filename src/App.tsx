import React from 'react';
import { Brands, Footer, Hero, Nav, NewsLetter } from './components';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Brands />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
