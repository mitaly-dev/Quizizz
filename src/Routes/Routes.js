import Categories from "../components/Categories";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Layout from "../components/Layout/Layout";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {path:'/',
    element:<Layout></Layout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/category',
        loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Categories></Categories>}
    ]
}
])

export default router