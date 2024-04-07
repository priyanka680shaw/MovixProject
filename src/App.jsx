import Home from "./Pagges/Home/Home"
import { Movies } from "./Components/Movies/Movies"
import { TvShow } from "./Components/TvShow/TvShow"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import { Navbar } from "./Components/Navbar/Navbar"
import { Footer } from "./Components/Footer/Footer"
import { Card } from "./Components/Card/Card"
import { DetailsPage } from "./Components/DetailsPage/DetailsPage"
function App() {
 
const routes = createBrowserRouter([
  {
    path : "/",
    Component :Home
  },
  {
    path : "/movie/",
    Component : Movies
  },
  {
    path : "/tv",
    Component : TvShow
  },
  {
    path : "/movie/:id",
    element  :<DetailsPage/>
  }
  
])
  return (
    <>
    <Navbar/>
   
    <RouterProvider router={routes}></RouterProvider>
    <Footer/>
    </>
  )
}

export default App
