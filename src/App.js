import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import publicRoute from './Components/publicRoute/publicRoute'
import Register from './Components/Login/Register'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
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
          <Route path='/privateRoute/:id' element={<PrivateRoute/>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
