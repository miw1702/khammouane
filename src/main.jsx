
import ReactDOM  from "react-dom/client";
import './tailwind.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Thamaen from "./pages/thamaen";
import Phuphaman from "./pages/Phuphaman";
import Thafhang from "./pages/Thafhang";
import Thamkonglo from "./pages/Thamkonglo"
const router = createBrowserRouter([
  {
     path:"/",
     element: <Home/>
  },
  {
     path:"/Thamaen",
     element: <Thamaen/>
  },
  {
   path:"/Phuphaman",
   element: <Phuphaman/>
  },
  {
    path:"/Thafhang",
    element:<Thafhang/>
  },
  {
   path:"/Thamkonglo",
   element:<Thamkonglo/>
 },
]);

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={router}/>);
