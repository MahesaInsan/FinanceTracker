import { BrowserRouter, Routes, Route } from "react-router-dom"
import Students from './views/Students'
import Header from "./views/Partial/Header"
import Footer from "./views/Partial/Footer"

function App() {

  return (
    <BrowserRouter>
        <div className='app'>
          <div className="contaienr mx-auto">
            <Header />
            <Students />
            <Footer />
          {/* <Routes>
            <Route path='/students' element={<Students/>}/>
          </Routes> */}
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
