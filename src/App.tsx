import React from 'react';
import {
  Brands,
  Footer,
  Hero,
  Nav,
  NewsLetter,
  Activeusers,
  Services,
  Steps,
} from './components';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Brands />
      <Activeusers />
      <Services />
      <Steps />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
