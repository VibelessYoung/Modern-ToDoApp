export const state = {
  TodosState: [],
};

export function addTodo(todoText) {
  state.TodosState.push(todoText);
}

export function getTodos() {
  return state.TodosState;
}
