import React from 'react';

const Friends = props => {
  return (
    <div>
      <h2>My list of friends!</h2>
      {props.friends.map(item => (
        <p key={Math.floor(Math.random() * 10000) + 10}>
          {`Name: ${item.name} ~ Age: ${item.age}`}
        </p>
      ))}
      <p>{props.name}</p>
    </div>
  )
};

export default Friends;