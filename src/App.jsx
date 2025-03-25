import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeNavBar from './components/homenavbar'
import HomePage from './components/herosection'
import About from './components/about'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </>
    )
  )

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
