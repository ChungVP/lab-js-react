import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState("")

  var url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=>{
    async function fetchData() {
      var res = await fetch(url);
      var data = await res.json();
      setData(data);
      setFilterData(data);
    }
    fetchData();
  },[])


  useEffect(()=>{
    
    const filtered = data.filter(item => {
     return item.title.toLowerCase().includes(search.toLocaleLowerCase())
    })

    // if (!filtered)
    //   setFilterData(data)
    // else 
    setFilterData(filtered)
  }, [search, data])

  return (
    <>
    <input type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)}/>
      {
        
        filterData.map((item)=>{
          return <div key={item.id}>
            <h3>{item.title}</h3>
            <h5>{item.body}</h5>
          </div>
        })
      }
    </>
  )
}

export default App
