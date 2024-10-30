import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { PostCard } from './compoments/postCard';
import {loadPost} from './utils/loadPosts.js';

class App extends Component {

  state = {
    post: []
  };

  componentDidMount() {
    this.loadPost();
  }


  loadPost = async () => {
    const postAndPhotos = await loadPost();
    this.setState({ post: postAndPhotos });
  }

  render() {
    const { post, counter } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {
            post.map(value => (
              <PostCard
                key={value.id}
                body={value.body}
                cover={value.cover}
                title={value.title}
              />
            ))
          }
        </div>
      </section>
    );
  }
}


export default App;
