import './App.css';
import { useEffect, useMemo, useState } from 'react';
import PostList from './compoments/post';

function App() {

  const [post, setPost] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((json) => json.json())
      .then((post) => setPost(post));
  }, []);


  return (
    <div className="App">

      <input
        type="search"
        value={valueSearch}
        onChange={(e) => setValueSearch(e.target.value)}
      />
      {
        useMemo(() => {
          return <PostList list={post} />
        }, [post])
      }
    </div>
  );
}

export default App;