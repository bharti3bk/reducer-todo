export const initialState = {
    todos: [
      {
        task: "Example Todo",
        completed: false,
        id: 386457474574
      }
    ],
    task: ""
  }; 

  function reducerTodo(state , action){
   switch(action.type){
       case "ADD" :
           return{

           }
        case "CLEAR" : 
            return {

            }  
         case "UPDATE" :
             return{

             }
         case "TOGGLE" :
             return{

             }
           default :
            return state;
   }
  } 
  export default reducerTodo;