import './styles.css';
import { Component } from 'react';
import { loadPost } from '../../utils/loadPosts.js';
import { Posts } from '../../compoments/posts/index.jsx';
import { Botao } from '../../compoments/botao';
class Home extends Component {

  state = {
    post: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  componentDidMount() {
    this.loadPost();
  }


  loadPost = async () => {
    const { page, postsPerPage } = this.state;
    const postAndPhotos = await loadPost();
    this.setState(
      {
        post: postAndPhotos.slice(page, postsPerPage),
        allPosts: postAndPhotos
      });
  }

  loadMorePosts = () => {
    console.log('load more posts');

  }

  render() {
    const { post, counter } = this.state;
    return (
      <div>
        <section className='container'>
          <Posts posts={post} />
        </section>
        <Botao text={'load more post'}/>
      </div>
    );
  }
}


export default Home;
