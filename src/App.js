import React from "react";
import Logo from "./Logo.js";
import Message from "./Message.js";
import Contact from './Contact.js';
import './Style.css';                    //Asa facem legatura dintre Style.css si App.js

function App() {
  return (
    <div className='page'>
      <Logo />
      <Message />
      <Contact />
    </div>
  );
}

export default App;
