import React from 'react';

const NewFriend = props => {
  return (
    <div>
      <h2>New Friend Form</h2>
      <form>
        <p>
          <input 
            type='text'
            name='name'
            placeholder='Name'
          />
        </p>
        <p>
          <input 
            type='text'
            name='age'
            placeholder='Age'
          />
        </p>
      </form>
      <button>Add your new friend!</button>
    </div>
  )
};

export default NewFriend;
