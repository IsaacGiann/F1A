import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

const WelcomeMessage = () => {
  useEffect(() => {
    const msg = "Welcome to the Formula 1 Advanced page by Future Sports";
    const d = new Date();
    alert(msg + " Today's date is " + d);
  }, []); 
  return null;
};

const Carousel = () => {
  const [listElems, setListElems] = useState([]);

  useEffect(() => {
    const carousel = document.querySelector('.Carousel');
    const elems = carousel ? carousel.querySelectorAll('li') : [];
    setListElems(Array.from(elems));
  }, []); 
  let position = 0; 
  let width = 250; 
  let count = 4; 
  const handlePrevClick = () => {
    position += width * count;
    position = Math.min(position, 0);
    listElems.forEach(li => li.style.marginLeft = position + 'px');
  };
  const handleNextClick = () => {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    listElems.forEach(li => li.style.marginLeft = position + 'px');
  };
  return (
    <div className="Carousel">
      <button className="prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };
  const search = () => {
    const p = document.getElementById("summaryText");
    if (keyword !== "") {
      const regExp = new RegExp(keyword, "gi");
      p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
    }
  };

  return (
    <div>
      <input type="text" id="keyword" value={keyword} onChange={handleInputChange} />
      <button onClick={search}>Search</button>
    </div>
  );
};


export default App;
