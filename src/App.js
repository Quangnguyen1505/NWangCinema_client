import { Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import LoginSuccess from './component/LoginSucess';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/login-success/:userId/:tokenLogin' element={<LoginSuccess />}/>
      </Routes>
    </div>
  );
}

export default App;
