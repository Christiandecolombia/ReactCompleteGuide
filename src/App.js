import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // This is state, where props are stored
  state = {
    persons: [
      { id: 'sdshfkjd', name: 'Max', age: 2 },
      { id: 'dfds', name: 'Menu', age: 3 },
      { id: 'eere', name: 'Stephanie', age: 4 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'event.target.value', age: 35 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }




  render() {
    const style = {
      background: 'blue',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      curser: 'point',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((persons, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={persons.name}
              age={persons.age}
              key={persons.id}
              changed={(event) => this.namechangeHandler(event, persons.id)} />
          })
          }
        </div >
      );
    }


    return (
      <div className="App" >
        <h1>Hi, im a React App</h1>
        <p>This is really working!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}




      </div>
    );
  }
}

export default App;
