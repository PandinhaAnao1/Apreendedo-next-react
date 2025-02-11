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
    postsPerPage: 10,
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
    const {
      page,
      postsPerPage,
      allPosts,
      post,
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    post.push(...nextPosts);

    this.setState({ post, page: nextPage });


  }

  render() {
    const { post, counter, allPosts, postsPerPage, page} = this.state;
    const noMoerPosts = page + postsPerPage >= allPosts.length;

    return (
      <div>
        <section className='container'>
          <Posts posts={post} />
        </section>
        <div className='container-botao'>
          <Botao
            text='Carregar mais posts'
            onClick={this.loadMorePosts}
            disabled={noMoerPosts}
          />
        </div>
      </div>
    );
  }
}


export default Home;
