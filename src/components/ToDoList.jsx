import { useTask } from '../services/hooks';
import { isEmpty } from 'lodash';
import '../scss/todolist.scss';
import { toast } from 'react-toastify';
import {
  activeTasks,
  allTasks,
  completedTasks,
  removeCompletedTasks,
  removeTask,
  updateTask
} from '../services/storage';
import { update, remove } from '../api';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const swal = withReactContent(Swal);
export default function ToDoList() {
  const [{tasks, tasksClone}, dispatch] = useTask();
  const handleCompleteTask = (id) =>{
    const index = tasks.findIndex((t) => t.id === id);
    const clone = [...tasks];
    let selectedTask = clone[index];
    selectedTask.isCompleted = !selectedTask.isCompleted;
    const data = {isCompleted: selectedTask.isCompleted};
    update('tasks', id, data).then(({res}) => {
      if (res.ok === true) {
        dispatch(updateTask(clone));
        toast.info("Task is updated successful",{
          icon : "🌈",
        });
      }else{
        toast.error("Task is updated unsuccessful",{
          icon : "😥",
        });
      }
    });
  };
  const handleRemoveTask = (id) => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        title: 'font-size-24',
        htmlContainer: 'font-size-16',
        confirmButton: 'font-size-14',
        cancelButton: 'font-size-14',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        remove('tasks', id).then(({res}) => {
          if (res.ok === true) {
            const index = tasks.findIndex((t) => t.id === id);
            const clone = [...tasks];
            clone.splice(index, 1);
            dispatch(removeTask(clone));
          }else{
            toast.info('Task is removed unsuccessful', {
              icon: '😥'
            });
          }
        })
        swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
      }
    })
  };
  const handleRemoveCompletedTask = () => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        title: 'font-size-24',
        htmlContainer: 'font-size-16',
        confirmButton: 'font-size-14',
        cancelButton: 'font-size-14',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const clone = [...tasks];
        const seletedIds = clone.filter(task => task.isCompleted === true).map(task => task.id);
        seletedIds.forEach(id => remove('tasks', id));
        const newTasks = clone.filter(task => task.isCompleted === false);
        dispatch(removeCompletedTasks(newTasks));
        toast.success('The Completed tasks have been removed')
        swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
      }
    })
  };
  const handleAllTasks = () => {
    const clone = [...tasks];
    dispatch(allTasks(clone));
  };
  const handleActiveTasks = () => {
    const active = tasks.filter((task) => task.isCompleted === false);
    dispatch(activeTasks(active));
  };
  const handleCompletedTasks = () => {
    const Completed = tasks.filter((task) => task.isCompleted === true);
    dispatch(completedTasks(Completed));
  };
  return (
    <ul className="todo-list">
      {
        isEmpty(tasksClone) === false ?
          tasksClone.map(({id, name, isCompleted}) => (
            <li key={id} className={
              isCompleted === true ? 'task-done' : null
            }>
              <button className='btn' onClick={() => handleCompleteTask(id)}></button>
              <span>{name}</span>
              <button className='remove' onClick={() => handleRemoveTask(id)}></button>
            </li>
          )) :
          <li className='empty-list'>Empty List</li>
      }
      <li>
        <span
          className="task-count">
          {
            tasks.filter(task => task.isCompleted === false).length
          } task left
        </span>
        <div className="task-control">
          <button autoFocus={true} onClick={handleAllTasks}>All</button>
          <button onClick={handleActiveTasks}>Active</button>
          <button onClick={handleCompletedTasks}>Completed</button>
        </div>
        <button
          className="task-remove-completed"
          onClick={handleRemoveCompletedTask}
        >Clear completed</button>
      </li>
    </ul>
  )
}
