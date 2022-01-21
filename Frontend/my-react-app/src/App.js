import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./Register/Register";
import LoginPage from "./Login/Login";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
