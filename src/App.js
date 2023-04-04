import './App.css';
import {useDispatch, useSelector} from "react-redux";
//import {addString, decrement, increment, removeString} from "./store/toolkitReducer";
import {addString, decrement, increment, removeString} from "./store/toolkitSlice";



function App() {
  const count = useSelector(state => state.main.count)
  const list = useSelector(state => state.main.list)

  const dispatch = useDispatch()

  const addLineAsync = () => {
    return async dispatch => {
      setTimeout(() => {
        dispatch(addString('async line'))
      }, 2000)
    }
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <hr/>
      <div style={{margin: 20}}>
        <button onClick={()=> dispatch(addString(prompt()))}>add song line</button>
        <button onClick={()=> dispatch(removeString())}>remove last song line</button>
        <button onClick={()=> dispatch(addLineAsync())}>add async line</button>
        <div>
          {list?.length && list.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>

    </div>
  );
}

export default App;
