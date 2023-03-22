import { createContext, useEffect, useReducer } from 'react';
import { reducer, initialState } from './reducer';
import { get } from '../../api';
import { setTasks } from './actionsReducer';
export const Context = createContext();
export default function Provider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getData = async() => {
    get('tasks').then(({data}) => dispatch(setTasks(data)));
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}
