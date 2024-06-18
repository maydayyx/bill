import React from 'react'
import ReactDOM from 'react-dom/client'
import router from "@/router/index.jsx";
import {RouterProvider} from 'react-router-dom'
import '@/index.css'
import '@/theme.css'
ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
