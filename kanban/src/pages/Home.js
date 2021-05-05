import React, {useEffect,useState} from 'react';
import Todos from '../component/Todos'
import {useDispatch, useSelector} from 'react-redux'
import {getTodos} from '../store/action'
const Home = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  // const [todos, setTodos] = useState([])

  useEffect(()=> {
    dispatch(getTodos())
  }, [dispatch])

console.log(todos)
  return (
    <div>
      <h1>Hello ini Home</h1>
      <Todos title='test'/>
    </div>
  );
};

export default Home;