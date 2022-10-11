
import Blog from "../components/Blog";
import Categories from "../components/Categories";
import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Layout from "../components/Layout/Layout";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics";
import getAllData from "../Utils/getApiData";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {path:'/',
    loader:getAllData,
    element:<Layout></Layout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/category',element:<Categories></Categories>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/statistics',element:<Statistics></Statistics>},
        {path:'/quize/:quizeId',
        loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`),
        element:<Quiz></Quiz>
        }
       
    ]
}
])

export default router