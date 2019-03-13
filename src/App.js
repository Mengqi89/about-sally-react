import React from 'react';
import Title from './Title.js';
import Nav from './Nav.js';
import Contact from './Contact.js';
import Education from './Education.js';
import Employment from './Employment';
import './index.css';


function App() {
  
  const name = "Sally";

  return (
    <main className='App'>
      <Title />
      <Nav />
      <Contact />
      <Education />
      <Employment />
    </main>
  );
}

export default App;