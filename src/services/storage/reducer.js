import { tasks, tasksClone, taskInput, isDark } from "./constants";
export const initialState = {
  tasks,
  tasksClone,
  taskInput,
  isDark,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "todo/setTheme": {
      return { ...state, isDark: action.payload };
    }
    case "todo/setTasks": {
      return {
        ...state,
        tasks: [...action.payload],
        tasksClone: [...action.payload],
      };
    }
    case "todo/setTaskInput": {
      return { ...state, taskInput: action.payload };
    }
    case "todo/addTask": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        tasksClone: [...state.tasks, action.payload],
      };
    }
    case "todo/updateTask": {
      return {
        ...state,
        tasks: [...action.payload],
        tasksClone: [...action.payload],
      };
    }
    case "todo/removeTask": {
      return {
        ...state,
        tasks: [...action.payload],
        tasksClone: [...action.payload],
      };
    }
    case "todo/removeCompletedTasks": {
      return {
        ...state,
        tasks: [...action.payload],
        tasksClone: [...action.payload],
      };
    }
    case "todo/allTasks": {
      return { ...state, tasksClone: [...action.payload] };
    }
    case "todo/activeTasks": {
      return { ...state, tasksClone: [...action.payload] };
    }
    case "todo/completedTasks": {
      return { ...state, tasksClone: [...action.payload] };
    }
    default:
      throw new Error("Unknown action");
  }
};
