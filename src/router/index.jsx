import Layout from "@/pages/Layout/index.jsx";
import New from "@/pages/New/index.jsx"
import Month from "@/pages/Month/index.jsx";
import Year from "@/pages/Year/index.jsx";
import NotFound from "@/pages/NotFound/index.jsx";
//创建路由实例
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                // path:'month',
                index:true, //设置为默认二级路由
                element:<Month/>
            },
            {
                path:'year',
                element:<Year/>
            }
        ]
    },
    {
        path:'/new',
        element:<New/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])

export default router