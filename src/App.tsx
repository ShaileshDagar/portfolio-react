import Navbar from './Components/Navbar'
// import Home from './Components/Home'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App
