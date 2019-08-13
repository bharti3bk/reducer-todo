import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: '',
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Todo List</h1>
           <input
              type='text'
              name='task'
              value={this.task}
              onChange={this.handleChange}
            />
          <button onClick={() => this.props.addTodo(this.state.task)}>
            Add Todo
          </button>
          <button onClick={this.props.clearCompleted}>Clear completed</button>
        
      </form>
    );
  }
}

export default TodoForm;