import { BrowserRouter, Routes, Route } from "react-router-dom"
import Students from './views/Students'
import Header from "./views/Partial/Header"
import Footer from "./views/Partial/Footer"
import CreateExpences from "./views/Component/Expences/CreateExpences"
import CreateIncome from "./views/Component/Income/CreateIncome"
import CreateGoal from "./views/Component/Goal/CreateGoal"

function App() {

  return (
    <BrowserRouter>
        <div className='app'>
          <div className="contaienr mx-auto">
            <Header />
            <Routes>
              <Route path='/expences/create' element={<CreateExpences/>}/>
              <Route path='/income/create' element={<CreateIncome/>}/>
              <Route path='/goal/create' element={<CreateGoal/>}/>
            </Routes>
            <Footer />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
