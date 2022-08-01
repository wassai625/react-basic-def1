import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DrfApiFetch = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/',{
            headers: {
                'Authorization': 'Token 155a1b1a2661a4e3451e93c267fab3b7d6761f49'
            }
        })
        .then(res => {setTasks(res.data)})
    },[])

  return (
    <div>
        <ul>
            {
                tasks.map(task => <li key={task.id}> {task.title}  {task.id} </li>)
            }
        </ul>
    </div>
  )
}

export default DrfApiFetch


