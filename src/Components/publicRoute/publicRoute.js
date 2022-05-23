import Home from "../Home/Home";
import Login from "../Login/Login";
import About from "../PublicRoutes/About";
import Blog from "../PublicRoutes/Blog";
import Contact from "../PublicRoutes/Contact";
import Dashboard from "../PublicRoutes/Dashboard";

const publicRoute=[
    {name:'Home',path:'/',Component:Home},
    {name:'Dashboard',path:'/dashboard',Component:Dashboard},
    {name:'Blog',path:'/blog',Component:Blog},
    {name:'About',path:'/about',Component:About},
    {name:'Contact',path:'/contact',Component:Contact},
    {name:'Login',path:'/login',Component:Login},
]
export default publicRoute