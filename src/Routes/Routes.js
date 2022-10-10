import Errorpage from "../components/Errorpage";
import Home from "../components/Home";
import Layout from "../components/Layout/Layout";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {path:'/',
    element:<Layout></Layout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {path:'/',element:<Home></Home>}
    ]
}
])

export default router