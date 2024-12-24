
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Components/Layout/LayoutOne'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'

function App() {

  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        </Route>

      </Route>
    )
  )


  return (
    <>

    <RouterProvider router={myRoute}/>
      
    </>
  )
}

export default App
