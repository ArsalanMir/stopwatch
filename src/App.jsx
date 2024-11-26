import { useRef, useState } from 'react'
import './App.css'

function App() {
//   const [count, setCount] = useState(0);
//   const a = useRef(0);
//   const btnRef = useRef();

// function handelClick(){
//   a.current = a.current + 1;
//   console.log(a.current);
//   setCount(count + 1)
// }
// function changeClr(){
//   btnRef.current.style.background ="Red";
// }
const [time, setTime]=useState(0);
const timeRef = useRef(null);
const inputRef = useRef();

function startTimer(){
  timeRef.current = setInterval(()=>{
    setTime(time => time + 1)
  },1000);


}
function stopTimer(){
  clearInterval(timeRef.current)
  timeRef.current =null;
}
function resetTimer(){
  stopTimer();
  setTime(0);

}
function j(){
inputRef.current.focus();
}
  return (
    <>
      {/* <div>
        <button ref ={btnRef} onClick={handelClick}>increment</button>
      </div>
       <div>
        <button onClick={changeClr}>Change clr</button>
       </div>
      <div>
      Count :{count}
      </div> */}
      <div>
        <h1>StopWatch :{time} sec</h1>
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        </div>
       <div> <button onClick={stopTimer}>Stop</button>
       </div>
       <div>
        <button onClick={resetTimer}>Reset</button>
      </div>
<p>added change</p>

      <input type="text" ref={inputRef}/>
<button onClick={j}>jjjjjjjj</button>
    </>
  )
}

export default App
