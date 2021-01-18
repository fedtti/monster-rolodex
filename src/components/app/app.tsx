import * as React from 'react';
import { SearchBox, CardList } from '../../components';
import './app.scss';

interface State {
  monsters: { id: number, email: string, name: string }[],
  searchField: string
}

class App extends React.Component <{}, State> {
  state: State = {
    monsters: [],
    searchField: ''
  }

  handleChange = (event: React.ChangeEvent <HTMLInputElement>) => {
    this.setState({ searchField: event.target.value });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='app'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='Search monster'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;