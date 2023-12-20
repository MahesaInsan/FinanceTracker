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
import Profile from "./views/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    // <SkeletonTheme baseColor="#F1F2F3" highlightColor="#FFFFFF">
    <SkeletonTheme baseColor="#E0E0E0" highlightColor="#F0F0F0">
      <BrowserRouter>
        <div className="app h-screen">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/goal/create" element={<CreateGoal />} />
            <Route path="/profile/" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
