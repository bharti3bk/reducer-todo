import React , {useReducer} from 'react';

import TodoForm from './Components/todoform'
import TodoList from './Components/todolist' 
import {initialState , reducerTodo}  from './reducers/todoreducer';

function App () {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const[state , dispatch] = useReducer(reducerTodo , initialState);
  const toggle = (id) => {
    dispatch({type: "TOGGLE" , payload: task})
  }
  const addTodo = (task) => {
    dispatch({type: "ADD" , payload: task})
  }
  const clearCompleted = () => {
    dispatch({type : "CLEAR"})
  } 
  const handleChange = (event) => {
    dispatch({type: "UPDATE" , payload: event.target.value})
  }
    return (
      <div>
        <h2> Todo App!</h2>
        <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
        <TodoList
          todos={state.todos}
          handleChange={handleChange}
          toggleCompleted={toggle}/>
       </div>
    );
  }


export default App;
