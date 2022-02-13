import { useState, useEffect } from 'react';
import './App.css';
import { SearchTerm } from "./features/searchTerm/SearchTerm.js";
import { Hobby } from "./features/hobby/Hobby.js";
import { Posts } from "./features/posts/Posts.js";
import { getData } from './utils/http-request.js';
import { appStyles, toTopButtonStyles } from "./styles/styles.js";

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [hobby, setHobby] = useState('sports');
  const [data, setData] = useState([]);


  useEffect(() => {
    async function gD() {
      const dataObj = await getData(hobby);
      setData(dataObj.data.children);
    }
    gD();
  }, [hobby]);

  function handleChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
  };

  function handleClick(newHobby) {
    setHobby(newHobby);
  }


  return (
    <div data-testid="app" className="App" style={appStyles(hobby)}>
      <SearchTerm searchTerm={searchTerm} onChange={handleChange} hobby={hobby} />
      <main>
        <Hobby onClick={handleClick} hobby={hobby} />
        <Posts data={data} hobby={hobby} searchTerm={searchTerm} />
      </main>
      <footer>
        <button type="button" className="otherButton" style={toTopButtonStyles(hobby)}>
          <a href="#buttons"><span>Back to top</span></a>
        </button>
      </footer>
    </div>
  );
}

export default App;
