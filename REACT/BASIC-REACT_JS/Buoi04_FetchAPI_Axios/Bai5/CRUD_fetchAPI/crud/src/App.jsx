import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  var url = 'https://jsonplaceholder.typicode.com/todos';

  // useEffect (()=>{
  //   async function fetchdata() {
  //     var res = await fetch(url);
  //     var todos = await res.json();
  //     setTodos(todos)
  //     console.log(todos);
  //   }
  //   fetchdata();
  // },[])

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => setTodos(data))
  },[])


  return (
    <>
      {
        todos.map((item)=>{
          return <div key={item.id}>
            <p>{item.title}</p>
          </div>
        })
      }
    </>
  )
}

export default App
