export { reducer, initialState } from "./reducer";
export { Context, default as Provider } from "./Provider";
export {
  setTheme,
  setTasks,
  setTaskInput,
  addTask,
  removeTask,
  removeCompletedTasks,
  updateTask,
  allTasks,
  activeTasks,
  completedTasks,
} from "./actionsReducer";
