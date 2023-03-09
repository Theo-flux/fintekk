import React from 'react';
import {
  Brands,
  Footer,
  Hero,
  Nav,
  NewsLetter,
  Activeusers,
  Services,
} from './components';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Brands />
      <Activeusers />
      <Services />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
