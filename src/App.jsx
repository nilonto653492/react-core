import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '/Counter.jsx';
import Batsman  from '../batsman';
import Users from './Users';
import Friends from './friends';
import Posts from './Posts';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())


// const fetchFriends = async() =>{
//   const res  = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }
const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
const postsPromise = fetchPosts();

  // const friendsPromise = fetchFriends();
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

<Suspense fallback={<h4>Posts are coming</h4>}>
<Posts postsPromise={postsPromise}></Posts>

</Suspense>

      {/* <Users></Users>
      <Counter></Counter>
      <Batsman></Batsman> */}
      {/* <Suspense fallback= {<h3>Loading...</h3>}>
      <Users fetchUsers ={fetchUsers} ></Users ></Suspense> */}


{/* <Suspense fallback={<h3>Friends are coming for treat</h3>}>
<Friends friendsPromise={friendsPromise}></Friends>
</Suspense> */}


      <button onClick={handleClick}>CLICK me</button>
      <button onClick={() =>alert('click 4')}>CLICK me</button>
      <button onClick={handleClick3}>CLICK me</button>
      <button onClick={() => handleAdd5(10)}> click me</button>
     
    </>
  )
}

export default App
