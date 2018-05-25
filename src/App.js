import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state={
     persons:[
      {name: 'Niharika'},
      {name: 'Narayana'},
      {name: 'Nikhil'},
      {name: 'Ajitha'},
      {name: 'Nithya'}
      ]
    }

  onchangeHandler = (event) =>{
      this.setState({
         persons:[
             {name: event.target.value}
            ]
      })

    };

  render() {
    const style={
      margin: '10px auto',
      backgroundColor: '#ggg'
    };
    return (
       <div className="App">
        <header className="App-header">
          <h1 className="App-title">Niharika Reddy</h1>
          <h4 style={this.style} > University of Kansas | Computer Science | Female | India </h4>
        </header>
        <div  className="App-intro">
            <button style={style}> Hi there!!!!!! </button>
            <UserInput  changed={this.onchangeHandler} name={this.state.persons[0].name} />
            <UserOutput  name={this.state.persons[0].name} />
            <UserOutput  name={this.state.persons[1].name} />
            <UserOutput  name={this.state.persons[2].name} />
            <UserOutput  name={this.state.persons[3].name} />
            <UserOutput  name={this.state.persons[4].name} />

        </div>

      </div>
      );
  }

}

export default App;
