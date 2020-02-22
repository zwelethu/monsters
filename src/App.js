import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardlist/cardlist.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>
      response.json().then(users => this.setState({ monsters: users }))
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
