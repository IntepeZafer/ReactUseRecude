import {useReducer} from 'react';
import './App.css'

const initialState = 0
const reducer = (state , action) => {
  switch (action) {
    case '+':
      return state + 1
    case '-':
      return state - 1
    case 'x':
      return initialState
    default:
      return state
  }
}

function App() {
  const [state , dispatch] = useReducer(reducer , initialState)
  const increment = () => {
    dispatch('+')
  }
  const decrement = () => {
    dispatch('-')
  }
  const reset = () => {
    dispatch('x')
  }
  return (
    <>
      <div className="App">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>x</button>
        <div>{`count : ${state}`}</div>
      </div>
    </>
  )
}

export default App
