import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    post: [
      {
        id: 1,
        title: 'Titulo do post 1',
        bory: 'Corpo do post 1'
      },
      {
        id: 2,
        title: 'Titulo do post 2',
        bory: 'Corpo do post 2'
      },
      {
        id: 3,
        title: 'Titulo do post 3',
        bory: 'Corpo do post 3'
      }
    ]
  };

  render() {
    const { post } = this.state;
    return (
      <div className='App'>
        {
          post.map(value => (
            <div>
              <h1>{value.title}</h1>
              <p>{value.bory}</p>
            </div>
          ))
        }
      </div>
    );
  }
}


export default App;
