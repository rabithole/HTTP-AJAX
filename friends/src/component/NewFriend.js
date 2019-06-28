import React from 'react';
class NewFriend extends React.Component {

  constructor() {
    super();
    this.state = {
        item: {
          name: '',
          age: '',
          email: ''
        }
    };
  }

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'price') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      item: {
        ...prevState.item,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ // This resets state on New Friends which clears the form... 
      item: {
        name: '',
        age: '', 
        email: ''
      }
    })
  }

  render() {
    return (
      <div>
        <h2>New Friend Form</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input 
              type='text'
              name='name'
              placeholder='Name'
              onChange={this.changeHandler}
              value={this.state.item.name}
            />
          </p>
          <p>
            <input 
              type='text'
              name='age'
              placeholder='Age'
              onChange={this.changeHandler}
              value={this.state.item.age}
            />
          </p>
          <p>
            <input 
              type='text'
              name='email'
              placeholder='Email Address'
              onChange={this.changeHandler}
              value={this.state.item.email}
            />
          </p>
        </form>
        <button onClick={this.handleSubmit}>Add your new friend!</button>
      </div>
    )
  }
};

export default NewFriend;
