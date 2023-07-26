
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Registration />}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
