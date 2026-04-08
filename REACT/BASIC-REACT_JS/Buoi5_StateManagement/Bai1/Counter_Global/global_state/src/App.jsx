import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useRecoilValue } from 'recoil'
import { counterState } from './components/counterState'
import { useRecoilState } from 'recoil'

function App() {
  
  var gs = useRecoilValue(counterState)
  var [value, setValue] = useRecoilState(counterState)
  
  const handleChange = (key) => {
    if (key == 'IN')
      setValue(value + 1) 
    else if (key == 'DE')
      setValue(value - 1)
  }

  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick={() => handleChange('IN')}>Tăng</button>
      <button onClick={()=>handleChange('DE')}>Giảm</button>
    </>
  )
}

export default App
