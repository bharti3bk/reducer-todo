import React from 'react';

import './todo.css';
import Todo from './todo';

const TodoList = props => {
  return (
    <>
      {props.todos.map(todo => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </>
  );
};

export default TodoList;