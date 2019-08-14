export const initialState = {
  todos: [
    {
      task: "Example Todo",
      completed: false,
      id: 386457474574
    } ,

    {
      task: "Example2 Todo",
      completed: false,
      id: 386457474575
    }
  ] 
};

export function reducerTodo(state, action) {
  switch (action.type) {
    case "ADD":
      const newTodo = {
        task: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case "CLEAR":
      const clearTodos = state.todos.filter(todo => todo.completed !== true);
      return {
        ...state,
        todos: clearTodos
      };
    case "TOGGLE":
             const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  };
                } else {
                  return todo;
                }
              })

              return {
                  ...state,
                  todos: updatedTodos
              }
    default:
      return state;
  }
}

