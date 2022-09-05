import React, { useState } from 'react'


const Display = (props) => {
    const { currentTask, list, setList } = props;
    // const [isDone, setIsDone] = useState(false)

    const handleDone = (i) => {
        props.list[i].done = !props.list[i].done;
        // if true set to false, vice versa
        props.setList([...props.list])
    }

    const deleteTask = (i) => {
        props.onDelete(i)
    }

    return (
        <div className='container'>
            {props.list.map((item, i) =>
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <ul>
                        <li style={props.list[i].done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{item.task}</li>
                    </ul>
                    <input style={{ margin: '20px' }} type="checkbox" value={item.done} checked={item.done} onChange={() => handleDone(i)} />
                    <button style={{ margin: '30px' }} value={item} onClick={() => deleteTask(i)}>Delete</button>
                </div>)}
        </div >
    )
}

export default Display; 