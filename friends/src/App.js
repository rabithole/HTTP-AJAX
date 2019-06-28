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
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({ friends: res.data }) // This updates state so the added person will render in real time. 
        this.props.history.push('/') // Returns to the home page after submitting the new friend...
        }) 

      .catch(err => console.log(err))
  }

  deleteItem = (e, item) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${item.id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/');
      })
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
            deleteItem={this.deleteItem}
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
