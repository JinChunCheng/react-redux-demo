const INSERT_TODO_ITEM = 'INSERT_TODO_ITEM';
const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export function insertTodo(item) {
    return {
        type: INSERT_TODO_ITEM,
        ...item
    };
}
export function deleteTodo(item) {
    return {
        type: DELETE_TODO_ITEM,
        ...item
    };
}