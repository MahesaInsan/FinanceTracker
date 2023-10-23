import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./views/Students";
import Welcome from "./views/Welcome";
import Dashboard from "./views/Dashboard";
import Header from "./components/partial/Header";
import Footer from "./components/partial/Footer";
import CreateExpences from "./components/expence/CreateExpence";
import CreateIncome from "./components/income/CreateIncome";
import CreateGoal from "./components/goal/CreateGoal";
import Transaction from "./views/Transaction";

function App() {
  return (
    <BrowserRouter>
      <div className="app h-screen">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/students" element={<Students />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expences/create" element={<CreateExpences />} />
          <Route path='/income/create' element={<CreateIncome/>}/>
          <Route path='/goal/create' element={<CreateGoal/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
