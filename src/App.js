import { useState } from 'react';
import Login from "./Login/login";
import Home from "./Home/SideNavBar";
import './App.css';
import { createBrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Login  />} />
        <Route path='/SideNavBar' element={<Home/>} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;