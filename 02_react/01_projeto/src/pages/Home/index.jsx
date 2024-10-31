import './styles.css';
import { Component } from 'react';
import { loadPost } from '../../utils/loadPosts.js';
import { Posts } from '../../compoments/posts/index.jsx';

class Home extends Component {

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
        <Posts posts={post} />
      </section>
    );
  }
}


export default Home;
