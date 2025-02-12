import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { loadPost } from '../../utils/loadPosts.js';
import { Posts } from '../../compoments/posts/index.jsx';
import { Botao } from '../../compoments/botao';
import { TextInput } from '../../compoments/TextInput/index.jsx';


export const Home = () => {

  const [post, setPost] = useState([]); 
  const [allPosts, setAllPosts] = useState([]); 
  const [page, setPage] = useState(0); 
  const [postsPerPage, setPostsPerPage] = useState(10); 
  const [searchValue, setSearchValue] = useState(''); 


  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postAndPhotos = await loadPost();
    setPost(postAndPhotos.slice(page, postsPerPage));  
    setAllPosts(postAndPhotos);
  
  }, []);


  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);
  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    post.push(...nextPosts);
    
    setPost(post);
    setPage( nextPage );

  }
    
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }
    

  const noMoerPosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    }) : post;

  return (
    <section className='container'>
      <TextInput
        searchValue={searchValue}
        handleChange={handleChange}
      />
    
      {
        filteredPosts.length === 0 && (
          <p>Post não encontrado</p>
          )
      }
      {
        filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
          )
      }
      <div className='container-botao'>
        <Botao
          text='Carregar mais posts'
          onClick={loadMorePosts}
          disabled={noMoerPosts}
        />
      </div>
    </section>
        );
}
// class Home extends Component {

//   state = {
//     post: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: ''

//   };

//   componentDidMount() {
//     this.loadPost();
//   }


//   loadPost = async () => {
//     const { page, postsPerPage } = this.state;
//     const postAndPhotos = await loadPost();
//     this.setState(
//       {
//         post: postAndPhotos.slice(page, postsPerPage),
//         allPosts: postAndPhotos
//       });
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       post,
//     } = this.state;

//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     post.push(...nextPosts);

//     this.setState({ post, page: nextPage });
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//     console.log(e.target.value)
//   }

//   render() {
//     const { post, counter, allPosts, postsPerPage, page, searchValue } = this.state;



//     return (
//       <section className='container'>
      
//         <TextInput
//           searchValue={searchValue}
//           handleChange={this.handleChange}
//         />

//         {
//           filteredPosts.length === 0 && (
//             <p>Post não encontrado</p>
//           )
//         }
//         {
//           filteredPosts.length > 0 && (
//             <Posts posts={filteredPosts} />
//           )
//         }
//         <div className='container-botao'>
//           <Botao
//             text='Carregar mais posts'
//             onClick={this.loadMorePosts}
//             disabled={noMoerPosts}
//           />
//         </div>
//       </section>
//     );
//   }
// }


// export default Home;
