import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonHome from './components/button-component';

interface Props{

}

interface State{
  showModal: boolean;
  result: number;
  operation: string;

}

const num1 = 10;
const num2 = 9;

export default class App extends React.Component<Props, State> {
  
    constructor(props:Props){
      super(props);
      this.state ={
        showModal: false,
        result: undefined,
        operation: undefined,
      }
    }

handleOpenClose(){
   this.setState({showModal: !this.state.showModal})

}

calculate(operation: string) {
  let result;
  if (operation === "soma") {
    result = num1 + num2;
  } else if (operation === "subtracao") {
    result = num1 - num2;
  }

  this.setState({
    result: result
  });
}

setOperation(operation: string) {
  this.setState({ operation: operation });
}


    render(){
      const { operation, result } = this.state; 
      return (        
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Escolha uma operação para trabalhar com os números 10 e 9.
              <br></br>

              O resultado da operação {operation} é = {result}
            </p>
              <ButtonHome setOperation={(value: string) => this.setOperation(value)} calculate={(value:string) => this.calculate(value)} showModal={this.state.showModal} handleOpenClose={() => this.handleOpenClose()} />
          </header>
        </div>
      );
    }
}

