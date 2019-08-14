import React , {useReducer} from 'react';

import TodoForm from './Components/todoform'
import TodoList from './Components/todolist' 
import {initialState ,reducerTodo} from './reducers/todoreducer';

function App () {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const[state , dispatch] = useReducer(reducerTodo , initialState)
  const toggleCompleted = (id) => {
    dispatch({type: "TOGGLE", payload: id })
  }
  const addTodo = (todo) => {
    dispatch({type: "ADD", payload: todo})
  }
  const clear = () => {
    dispatch({type : "CLEAR"})
  } 
  const handleChange = (event) => {
    dispatch({type: "UPDATE"})
  }
  return (
      <div>
        <TodoForm
          addTodo={addTodo}
          clear={clear}
          handleChange={handleChange}
        />
        <TodoList
          todos={state.todos}
          toggleCompleted={toggleCompleted}
        />
      </div>
  );
  }


export default App;
