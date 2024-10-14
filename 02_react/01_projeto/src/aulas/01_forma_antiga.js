import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  //Forma antiga
  /*
  constructor(props){
    super(props);
    //Forma antiga eu tenho que compartilhar o estado 
    //Com o 
    this.handlePclick = this.handlePclick.bind(this);
  }
  */
 //Forma nova usando o class fields
  state = {
    name: 'Altenir Modesto Gomes',
    counter:0
  };
  //Forma antiga de se fazer o handle click
  handlePclick = () => {
    this.setState({name:'Altenir Não Gomes Modesto'});
  }
  //Forma hackeada de fazer,
  //Acontece pois a arrow function não this internamente 
  //E sim busca no pai qual o estado fazendo que não seja necesario
  //Fazer o bind
  handleAclick = (event) =>{
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1});
  }
  render(){
    const {name,counter} = this.state;
    return (
      <>
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePclick}>
          {name} {counter}
          </p>
            <a
            onClick={this.handleAclick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            </header>
          </div>
      </>
    );
  }
}
/*
function App() {
  //Tudo que esta dentro dos () é jsx
  //O QUE ESTA ENTRE {} É javascript
  return (
    <>
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    </header>
    </div>
    </>
  );
}
*/

export default App;
