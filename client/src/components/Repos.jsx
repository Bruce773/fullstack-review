import React from 'react';

const Repos = ({ id, name, fork, created_at }) => (
  <div>
    <h2>{name}</h2>
    <p>Created: {created_at}</p>
    <p>Fork: {`${fork}`}</p>
  </div>
);

export default Repos;
