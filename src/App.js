import {useReducer} from "react";

import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc1':
      return {...state, count1: state.count1 + 1}
    case 'dec1':
      return {...state, count1: state.count1 - 1}
    case 'reset1':
      return {...state, count1: action.payload}

    case 'inc2':
      return {...state, count2: state.count2 + 1}
    case 'dec2':
      return {...state, count2: state.count2 - 1}
    case 'reset2':
      return {...state, count2: action.payload}

    case 'inc3':
      return {...state, count3: state.count3 + 1}
    case 'dec3':
      return {...state, count3: state.count3 - 1}
    case 'reset3':
      return {...state, count3: action.payload}

    default:
      throw new Error('MyError')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

  return (
      <div>
        <div>{state.count1}</div>
        <button onClick={() => dispatch({type: 'inc1'})}>INC_1</button>
        <button onClick={() => dispatch({type: 'dec1'})}>DEC_1</button>
        <button onClick={() => dispatch({type: 'reset1', payload: 1})}>RESET_1</button>

        <div>{state.count2}</div>
        <button onClick={() => dispatch({type: 'inc2'})}>INC_2</button>
        <button onClick={() => dispatch({type: 'dec2'})}>DEC_2</button>
        <button onClick={() => dispatch({type: 'reset2', payload: 2})}>RESET_2</button>

        <div>{state.count3}</div>
        <button onClick={() => dispatch({type: 'inc3'})}>INC_3</button>
        <button onClick={() => dispatch({type: 'dec3'})}>DEC_3</button>
        <button onClick={() => dispatch({type: 'reset3', payload: 3})}>RESET_3</button>
      </div>
  );
}

export default App;
