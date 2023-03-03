import React from 'react';
import { Brands, Footer, Nav, NewsLetter } from './components';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Brands />
      <NewsLetter />
      <Footer />
    </React.Fragment>
  );
}

export default App;
