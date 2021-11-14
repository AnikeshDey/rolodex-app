import React from 'react';
import './App.css';


import { CardList } from './components/card-list/CardList.component';
import { SearchBox } from './components/search-box/SearchBox.component';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => {
      // console.log(data);
      this.setState({monsters : data})
    })
  }

  handleSearch = (event) => {
    this.setState({searchText : event.target.value })
  }
  
  render(){
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchText.toLowerCase())
    );


    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox 
         itemPlaceholder="Search Monsters"
         handleChange={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
