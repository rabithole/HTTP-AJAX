import React from 'react';
import './App.css';

import Friends from './component/Friends';
import NewFriend from './component/NewFriend';

import axios from 'axios';
import { Route, NavLink} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
     return (
      <div className="App">
        <nav>
          <NavLink to={'/'} exact>
            Home
          </NavLink>
          <NavLink to={'/NewFriend'}>
            Add a New Friend
          </NavLink>
          
        </nav>
        <header className="App-header">
          <Route 
            exact path='/' 
            render={props => <Friends {...props}
            friends={this.state.friends}
          />}/>

          <Route 
            path='/NewFriend'
            render={props => <NewFriend {...props}

            />}/>
        </header>
      </div>
    );
  }
 
}

export default App;
