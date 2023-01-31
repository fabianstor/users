import './Task.css'
import { useState } from 'react'
import Popup from 'reactjs-popup';
import { ITask } from '../../interface/task.interface'

function Task() {
  const [tasks, setTask] = useState({} as ITask)
  const [taskArray, setTaskArray] = useState<ITask[]>([])
  let showTask = false

  const saveValueTask = ({target}: any) => {
        setTask({
            ...tasks,
            [target.name] : target.value
        })
  }

  const saveArrayTasks = (e: any) => {
    e.preventDefault()
    setTaskArray([... taskArray, tasks])
  }

  const saveTask = () => {
    if (taskArray.length > 0) {
        return (taskArray.map((task: any, key) =>
                <div className='title-div' key={key} onClick={() => showTasks(key)}>
                    <span>{task.title}</span>
                </div>
        ))
    }
  }

  const showTasks = (key: number) => {
    showTask = !showTask
  }

  return (
    <div className='main-task'>
        <div className="separator">
            <div className='container-title'>
                {saveTask()}
            </div>
            <div className='inputs-container'>
            </div>
            <Popup className='react-popup' trigger={<button className='btn-add-task'>Add Task</button>} position="right center">
                <div className='popup'>
                    <span className='span-task'>NEW TASK</span>
                    <form className='form-task' onSubmit={saveArrayTasks}>
                        <input className='input-popup' placeholder='Title' name='title' onChange={saveValueTask}></input>
                        <input className='input-popup' placeholder='Description' name='description' onChange={saveValueTask}></input>
                        <input className='input-popup' placeholder='Priority' name='priority' onChange={saveValueTask}></input>
                        <button className='btn-save' type='submit'>SAVE</button>
                    </form>
                </div>
            </Popup>
        </div>
        <div className='task-container'>
            
        </div>
    </div>
  )
}

export default Task