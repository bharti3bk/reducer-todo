import React from 'react';

import TodoForm from './Components/todoform'
import TodoList from './Components/todolist'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
        }
      ],
    };
  }

  toggleCompleted = id => { 
    console.log("toggle")
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
       
      </div>
    );
  }
}

export default App;
