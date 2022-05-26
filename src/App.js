import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import publicRoute from './Components/publicRoute/publicRoute'
import Register from './Components/Login/Register'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer';
import Dashboard from './Components/PublicRoutes/Dashboard';
import MyOrder from './Components/PublicRoutes/MyOrder';
import MyProfile from './Components/PublicRoutes/MyProfile';
import AddReview from './Components/PublicRoutes/AddReview';
import RequireAuth from './Components/Shared/RequireAuth'
import Payment from './Components/PublicRoutes/Payment';
import UpdateProfile from './Components/PublicRoutes/UpdateProfile';
import ManageAllUser from './Components/PublicRoutes/ManageAllUser';
import RequireAdmin from './Components/Shared/RequireAdmin';
import MakeAdmin from './Components/PublicRoutes/MakeAdmin';
import ManageAllOrder from './Components/PublicRoutes/MangeAllOrder';
import AddProduct from './Components/PublicRoutes/AddProduct';
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
          <Route path='/dashBoard' element={<Dashboard />}>
            <Route index element={<MyProfile />} />
            <Route path='myOrder' element={<MyOrder />} />
            <Route path='addReview' element={<AddReview />} />
            <Route path='updateProfile' element={<UpdateProfile />} />
            <Route path='payment/:id' element={<Payment />} />

          {/* Admin route  */}
          <Route path='manageAllUser' element={<RequireAdmin><ManageAllUser/></RequireAdmin>}/>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>}/>
          <Route path='manageAllOrder' element={<RequireAdmin><ManageAllOrder/></RequireAdmin>}/>
          <Route path='addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}/>

          </Route>
          <Route path='/register' element={<Register />} />
          {/* public route  */}
          <Route path='/privateRoute/:id' element={<RequireAuth>
            <PrivateRoute />
          </RequireAuth>}></Route>
         {/*  <Route path='/payment/:id' element={<RequireAuth>
            <Payment />
          </RequireAuth>}></Route> */}

        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
