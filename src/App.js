import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import publicRoute from './Components/publicRoute/publicRoute'
import Register from './Components/Login/Register'
function App() {
  console.log(publicRoute)
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar>
        <Routes>
          {/* public route  */}
          {
            publicRoute.map(({ Component, path }, index) => <Route
            key={index}
            path={path}
            element={<Component />}
          />)
          }
          <Route path='/register' element={<Register/>}/>
          {/* public route  */}
          
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
