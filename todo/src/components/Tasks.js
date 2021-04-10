
import Task from './Task'
const Tasks=({tasks,onDelete,onActivate})=> {

    return (
        < >
        {tasks.map((task)=>(
           <Task key={task.id} task={task} onDelete={onDelete} onActivate={onActivate}/>
        ))}
        </>
    )
}

export default Tasks
