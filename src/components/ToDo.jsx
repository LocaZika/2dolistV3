import '../scss/todo.scss';
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoTheme from './ToDoTheme'

export default function ToDo() {
  return (
    <div className='todo'>
      <ToDoTheme />
      <ToDoForm />
      <ToDoList />
    </div>
  )
}
