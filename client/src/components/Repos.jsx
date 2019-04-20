import React from 'react';

const Repos = ({ id, name, fork, created_at, html_url }) => (
  <div
    style={{
      backgroundColor: 'lightGrey',
      borderRadius: '10px',
      padding: '5px',
      margin: 'auto',
      marginTop: '10px',
      width: '40%',
    }}
  >
    <a href={`${html_url}`} target="_blank">
      <h2 style={{ fontSize: '30px' }}>{name}</h2>
    </a>
    <div style={{ fontSize: '25px' }}>Created:</div>{' '}
    <div style={{ color: 'blue', fontSize: '20px', marginTop: '10px' }}>
      {created_at}
    </div>
    <div style={{ fontSize: '25px' }}>Fork:</div>
    <div
      style={{ color: 'blue', fontSize: '20px', marginTop: '10px' }}
    >{`${fork}`}</div>
  </div>
);

export default Repos;
