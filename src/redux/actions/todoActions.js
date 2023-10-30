
export function addTodo (input) {
    return {
    type: "ADD_TODO",
    payload: input,
}};

export function deleteTodo(id) {
    return {
    type: "DELETE_TODO",
    payload: id,
}};

export function updateTodo (id, value){
    return{
    type: "UPDATE_TODO",
    payload: {id, value},
}};

export function statusTodo (id) {
    return {
    type: "STATUS_TODO",
    payload: {id},
}};

export function setFilter(filter){
    return{
    type: "SET_FILTER",
    payload: filter,
}};

const todoAction = {
    addTodo,
    statusTodo,
    deleteTodo,
    updateTodo,
    setFilter,
}

export default todoAction;