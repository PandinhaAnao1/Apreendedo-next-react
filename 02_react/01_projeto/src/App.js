import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { PostCard } from './compoments/postCard';

class App extends Component {

  state = {
    post: []
  };

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {
    const postResponse = fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const photosResponse = fetch(
      'https://jsonplaceholder.typicode.com/photos'
    );
    const [posts,photos] = await Promise.all([postResponse,photosResponse]);

    const postJson = await posts.json();

    const photoJson = await photos.json();

    const postImages = postJson.map((post, index) => (
      {...post, cover:photoJson[index].url }
    ));

    this.setState({ post: postImages });
  }



  render() {
    const { post, counter } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {
            post.map(value => (
             <PostCard body={value.body} cover={value.cover} id={value.id} title={value.title} />
            ))
          }
        </div>
      </section>
    );
  }
}


export default App;
