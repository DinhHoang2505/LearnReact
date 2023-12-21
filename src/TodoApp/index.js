import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { addJob, deleteJob, setJob } from './action'


function Todo() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const jobRef = useRef()

    const handleAddjob = (job) => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        jobRef.current.focus()
    }

    const handleDeletejob = (index) => {
        dispatch(deleteJob(index))
    }

    return (
        <div>
            <h2>To Do List</h2>
            <input
                type="text"
                value={job}
                ref={jobRef}
                onChange={e => { dispatch(setJob(e.target.value)) }}
                placeholder='Enter todo...'
            />
            <button onClick={() => handleAddjob(job)}>Add</button>
            <ul>
                {jobs.map((job, index) =>
                    <li key={index}>{job} <button onClick={() => handleDeletejob(index)}>x</button> </li>
                )}
            </ul>
        </div>
    );
}

export default Todo;
