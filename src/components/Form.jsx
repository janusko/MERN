import React, { useState } from 'react'

const Form = (props) => {
    const [task, setTask] = useState('');
    const [done, setToDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask(task, done);
        setTask('');
        setToDone(false)
    }

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Todo</h3>
                <input type="text" name="task" value={task} onChange={handleTask}/>
                <input type="submit" value='Add a Task' />
            </form>
        </div>
    )
}

export default Form;