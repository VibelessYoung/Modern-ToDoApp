export const state = {
  TodosState: [],
};

export function addTodo(todoText) {
  state.TodosState.push(todoText);
  localStorage.setItem("todos", JSON.stringify(state.TodosState));
}

export function getTodos() {
  return state.TodosState;
}

export function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved) {
    state.TodosState = JSON.parse(saved);
  }
}
