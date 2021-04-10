import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from "./components/Tasks"
import {useState} from "react"
import Form from './components/Form'

function App() {
  const [showAddTask,setShowAddTask]=useState(false)

  const [tasks,setTasks]=useState([{
    id:1,
    text:'have lunch with family',
     day:'10 may 2020',
     reminder:true
},
{
  id:2,
    text:'sunday sport',
    day:'12 may 2020',
    reminder:true
},
{
  id:3,
    text:'sport with friends',
    day:'10 may 2020',
    reminder:false
}])
//delete task
const deleteTask=(id)=>{
 setTasks(
tasks.filter((task)=>task.id !== id)


 )
}

//activating reminder
const activateReminder=(id)=>{
setTasks(tasks.map((task)=>(
  task.id===id ? {...task,reminder:!task.reminder} : task
)))
}
//adding newTask
const addNewTask=(task)=>{
const id=Math.floor(Math.random()*10000)+1
const newtask={id,...task}

setTasks([...tasks,newtask ])
}
const displayTask=()=>{
  setShowAddTask(!showAddTask)
}
  return (
    <div className='container'>
   <Header onAdd={displayTask} />
   {showAddTask && <Form onAdd={addNewTask} />}
   {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onActivate={activateReminder}/> : 'no tasks!'} 
    </div>
  )
    
     
}

export default App;
