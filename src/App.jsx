import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '/Counter.jsx';
import Batsman  from '../batsman';
function App() {
  const [count, setCount] = useState(0)
function handleClick(){
  alert('I am clicked')
}

const handleClick3 = () => {
  alert('clicked')
}

const handleAdd5 = (num) =>{
  const newNum = num+5;
  alert(newNum);
}
  return (
    <>
      
      <h3>Vite + React</h3>
      <Counter></Counter>
      <Batsman></Batsman>
      <button onClick={handleClick}>CLICK me</button>
      <button onClick={() =>alert('click 4')}>CLICK me</button>
      <button onClick={handleClick3}>CLICK me</button>
      <button onClick={() => handleAdd5(10)}> click me</button>
     
    </>
  )
}

export default App
