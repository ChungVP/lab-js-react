import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const [erorr, setErr] = useState(null)

  const [loading, setLoading] = useState(true)
  var url = 'https://jsonplaceholder.typicode.com/users'
  
  useEffect(()=>{

    async function fetchdata() {
      try {
        var res = await fetch(url);
        console.log(res);
        if (!res.ok){
          throw new Error('Erorr network!')
        }
        var data = await res.json();
        console.log(data);
        setData(data);
      } catch (err) {
        console.log("No Excuted!");
        
        setErr(err.message)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      }
    }
    fetchdata();
  }, [])

  return (
    <>
      {
        loading ? (<p>Loading...</p>) : (erorr === null ? (
          data.map((item)=>{
            return <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
        }))
         : (<p>
          Erorr Network
         </p>))
      }
    </>
  )
}

export default App
