
import Home from "../Home/Home";
import Login from "../Login/Login";
import About from "../PublicRoutes/About";
import Blog from "../PublicRoutes/Blog";
import MyPortfolio from "../PublicRoutes/MyPortfolio"


const publicRoute=[
    {name:'Home',path:'/',Component:Home},
    {name:'Blog',path:'/blog',Component:Blog},
    {name:'About',path:'/about',Component:About},
    {name:'My Portfolio',path:'/myPortfolio',Component:MyPortfolio},
    {name:'Login',path:'/login',Component:Login},
]
export default publicRoute