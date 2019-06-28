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

  addItem = item => {
    console.log('Add item in app.js')
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({ friends: res.data }) // This updates state so the added person will render in real time. 
        this.props.history.push('/App')
        }) 

      .catch(err => console.log(err))
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
            addItem={this.addItem}
            />}/>
        </header>
      </div>
    );
  }
 
}

export default App;
