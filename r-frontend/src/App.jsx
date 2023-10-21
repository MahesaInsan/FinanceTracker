import { BrowserRouter, Routes, Route } from "react-router-dom"
import Students from './views/Students'
import Welcome from "./views/Welcome"

function App() {

  return (
    <BrowserRouter>
        <div className='app'>
          <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/students' element={<Students/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
