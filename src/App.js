import { useRef } from "react";
import "./App.css"
// import { useStore, actions } from './store'
import Video from "./Video"

function App() {
  // const [state, dispatch] = useStore()
  // const { todos, todoInput } = state
  // const inputRef = useRef()
  const videoRef = useRef()


  // const handleAdd = () => {
  //   if (todoInput.length > 0) {    
  //     dispatch(actions.addTodoInput(todoInput))
  //     dispatch(actions.setTodoInput(''))
  //     inputRef.current.focus()
  //   }
  // }

  // const handleDelete = (i) => {
  //   dispatch(actions.deleteTodoInput(i))
  // }
  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <div style={{ padding: "32px" }}>
      {/* <div>
        <h1>Todo useReducer + state</h1>
        <input type="text"
          value={todoInput}
          ref={inputRef}
          placeholder="Enter to do..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value));
          }}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {todos.map((todo, i) =>
            <li key={i}>{todo} <span onClick={() => handleDelete(i)}>x</span></li>
          )}
        </ul>
      </div> */}
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <Video ref={videoRef} />
    </div>

  );
}

export default App;
