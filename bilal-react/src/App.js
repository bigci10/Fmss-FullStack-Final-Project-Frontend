import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./ui/MainPage";
import Employees from "./ui/links/Employees";
import Expenses from "./ui/links/Expenses";
import CreateExpense from "./ui/links/CreateExpense";
import CreateLeave from "./ui/links/CreateLeave";
import Leaves from './ui/links/Leaves';
import CreateEmployee from './ui/links/CreateEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />}>
                  <Route index element={<Employees />} />
                  <Route path="employees" element={<Employees />} />
                  <Route path="expenses" element={<Expenses />} />
                  <Route path="leaves" element={<Leaves />} />
                  <Route path="save-employee" element={<CreateEmployee />} />
                  <Route path="save-expense"element={<CreateExpense />} />
                  <Route path="save-leave"element={<CreateLeave />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
