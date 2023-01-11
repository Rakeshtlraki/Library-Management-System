import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminHomePage from './Components/AdminHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<LandingPage/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/admin/*' element={<AdminHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
