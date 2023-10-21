import { BrowserRouter, Routes, Route } from "react-router-dom"
import Students from './views/Students'
import Dashboard from "./views/Dashboard"

function App() {

  return (
    <BrowserRouter>
        <div className='app'>
          <Routes>
            <Route path='/students' element={<Students/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
