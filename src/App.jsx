import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Orders from "./pages/orders/Orders";
import "./app.scss";
import Mygigs from "./pages/myGigs/Mygigs.jsx";




function App() {
  const Layout=()=>{
    return(
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
      
    );

  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path:"/",
        element:<Home/>

      },
      {
        path:"/gigs",
        element:<Gigs/>

      },
      {
        path:"/gig/:id",
        element:<Gig/>

      },
      {
        path:"orders",
        element:<Orders/>

      },
      {
        path:"/myGigs",
        element:<Mygigs/>

      },
      {
        path:"/add",
        element:<Add/>

      },
      {
        path:"/messages",
        element:<Messages/>

      },
      {
        path:"/message/:id",
        element:<Message/>

      },
      
    ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
