import '../scss/todotheme.scss';
import { useTask } from '../services/hooks';
import { setTheme } from '../services/storage';

export default function ToDoTheme() {
  const [{isDark}, dispatch] = useTask();
  const handleThemeClick = () => {
    dispatch(setTheme(!isDark));
  }
  return (
    <div className='todo-theme'>
      <h1>todo</h1>
      <button
        className={isDark === false ? 'dark' : 'light'}
        onClick={handleThemeClick}
      ></button>
    </div>
  )
}
