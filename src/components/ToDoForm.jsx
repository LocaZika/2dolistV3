import { useRef } from 'react';
import '../scss/todoform.scss';
import { debounce } from 'lodash';
import { useTask } from '../services/hooks';
import { addTask, setTaskInput } from '../services/storage';
import { post } from '../api';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(Swal);
export default function ToDoForm() {
  const [{taskInput}, dispatch] = useTask();
  const inputRef = useRef();
  const handleChange = debounce((e) => {
    dispatch(setTaskInput(e.target.value));
  }, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskInput.trim() !== '') {
      const newTask = {
        name: taskInput,
        isCompleted: false,
      }
      post('tasks', newTask).then(({data, res}) => {
        if(res.ok === true) {
          dispatch(addTask(data));
          toast.success("Task is added successful", {
            icon: '🔥',
          });
        }else{
          toast.error("Task is added unsuccessful", {
            icon: '😥',
          });
        }
      })
      dispatch(setTaskInput(''));
      inputRef.current.value = '';
    }else{
      toast.error("Please enter the content task", {
        icon: '😑',
      })
    }
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <button type='submit' className='btn'></button>
      <input type="text" placeholder='Create a new task' ref={inputRef} onChange={handleChange} />
    </form>
  )
}