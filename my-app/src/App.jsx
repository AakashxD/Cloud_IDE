import { useEffect } from 'react'
import './App.css'
import { pingApi } from './apis/ping';
function App() {
  useEffect(()=>{
        pingApi();
  },[]);

  return (
   <h2>Help</h2>
  )
}

export default App
