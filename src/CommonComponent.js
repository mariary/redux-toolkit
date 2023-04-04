import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addString1, decrement1, increment1, removeString1 } from "./store/toolkitSlice";

function CommonComponent(type) {
  const isReducer = type === 'reducer'
  const title = isReducer ? ' Reducer toolkit' : ' Slice toolkit'
  const count = useSelector(state => state[type].count)
  const list = useSelector(state => state[type].list)

  const dispatch = useDispatch()

  return (
      <div>
        {title}:
        <button onClick={()=> dispatch(increment1())}>increment</button>
        <button onClick={()=> dispatch(decrement1())}>decrement</button>
        <hr/>
        <div style={{margin: 20}}>
          <button onClick={()=> dispatch(addString1(prompt()))}>add song line</button>
          <button onClick={()=> dispatch(removeString1())}>remove last song line</button>
          <div>
            {list?.length && list.map(item => <p>{item}</p>)}
          </div>
        </div>
      </div>
  );
}

export default App;
