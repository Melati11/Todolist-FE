const initialState = {
  priority: [{
    id: 1,
    value: "coding exercise",
    completed: false,
  }
],
  filter: "all",
}

function todoReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
         const newTask = {
            id: Date.now(),
            value: action.payload,
            completed: false,
         }

         const clonePriority = [...state.priority, newTask];
         return{
            ...state,
            priority: clonePriority,
         };  
        
        case "DELETE_TODO":
            return {
                ...state,  
            priority: state.priority.filter((item) => item.id !== action.payload),
            };

        case "UPDATE_TODO":
            return {
                ...state,
                priority: state.priority.map((item) =>
                item.id === action.payload.id ? {...item, value: action.payload.value}
                : item
                ),
            };
        
        case "STATUS_TODO":
            return{
                ...state,
                priority: state.priority.map((item) => 
                item.id === action.payload.id ? {...item, completed: !item.completed}
                : item
                ),
            };   

        case "SET_FILTER":
            return {
                ...state, filter: action.payload,
            };

        default: 
        return state;
    }
};

export default todoReducer;