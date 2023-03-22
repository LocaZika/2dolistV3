export const setTheme = (boolean) => {
  return {
    type: "todo/setTheme",
    payload: boolean,
  };
};
export const setTasks = (data) => {
  return {
    type: "todo/setTasks",
    payload: data,
  };
};
export const setTaskInput = (value) => {
  return {
    type: "todo/setTaskInput",
    payload: value,
  };
};
export const addTask = (data) => {
  return {
    type: "todo/addTask",
    payload: data,
  };
};
export const removeTask = (id) => {
  return {
    type: "todo/removeTask",
    payload: id,
  };
};
export const removeCompletedTasks = (data) => {
  return {
    type: "todo/removeCompletedTasks",
    payload: data,
  };
};
export const updateTask = (data) => {
  return {
    type: "todo/updateTask",
    payload: data,
  };
};
export const allTasks = (data) => {
  return {
    type: "todo/allTasks",
    payload: data,
  };
};
export const activeTasks = (data) => {
  return {
    type: "todo/activeTasks",
    payload: data,
  };
};
export const completedTasks = (data) => {
  return {
    type: "todo/completedTasks",
    payload: data,
  };
};
