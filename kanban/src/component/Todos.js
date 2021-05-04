import React from 'react';
import Item from './Items'
const Todos = ({title}) => {
  return (
    <div style={styles.container}>
    <h2>{title}</h2>
    <Item/>
      
    </div>
  );
};

export default Todos;

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8
  }
}