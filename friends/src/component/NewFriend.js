import React from 'react';

const NewFriend = props => {
  return (
    <div>
      <h2>New Friend Form</h2>
      <form>
        <input 
          type='text'
          name='name'
        />
      </form>
    </div>
  )
};

export default NewFriend;
