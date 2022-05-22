import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
     <Navbar>
       <Routes>
         <Route path='/' element={<Home/>}/>
       </Routes>
     </Navbar>
    </div>
  );
}

export default App;
