import Layout from "../components/Layout/Layout";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");


const router = createBrowserRouter([
    {path:'/',
    element:<Layout></Layout>,
    children:[
        {path:'/',element:<Home></Home>}
    ]
}
])

export default router