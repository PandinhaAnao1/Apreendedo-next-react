import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    counter: 0,
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

  timeOutUpdate = null;

  //Funcão de ciclo de vida que é chamado assim que é carregado o 
  //compomente
  componentDidMount(prevProps, prevState, snapshot) {
    
    this.handleTimeOut();
  } 
  
  //Parecido com dart esse é o estado quando ele 
  //atuliza recebe esse itens do estado podemdo 
  //fazer verificações de como o itens estava estão
  //e vao estar ao atualizar
  //Paramentros prevProps, prevState, snapshot
  componentDidUpdate() {
    this.handleTimeOut();
  }

  //Funcão de ciclo de vida que é chamada assim que a pagina
  //Deixa de ser renderizada
  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate);
  }

  handleTimeOut = () => {
    const { counter, post } = this.state;
    post[0].title = 'O titulo mudou';
    this.timeOutUpdate = setTimeout(() => { 
      this.setState(
        {
          post,
          counter: counter + 1
        }
      );
    }, 1000)
  }

  render() {
    const { post, counter } = this.state;
    return (
      <div className='App'>
        <h1>{counter}</h1>
        {
          post.map(value => (
            <div key={value.id}>
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
