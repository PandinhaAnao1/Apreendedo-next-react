import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import PostList from './compoments/post';


const globalState = {
    handleClick: (e) => {
        console.log(e)
    }
}

const GlobalContext = React.createContext();  

function App() {

  const [post, setPost] = useState([]);
  const [valueSearch, setValueSearch] = useState('');

  const searchRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((json) => json.json())
      .then((post) => setPost(post));
  }, []);

  useEffect(() => {
    searchRef.current.focus();
  }, [valueSearch]);


  return (
    <div className="App">

      <input
        type="search"
        value={valueSearch}
        ref={searchRef}
        onChange={(e) => setValueSearch(e.target.value)}
      />
      {
        useMemo(() => {
          return <PostList list={post}  />
        }, [post])
      }
    </div>
  );
}

export default App;