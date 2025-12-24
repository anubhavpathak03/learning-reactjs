import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import { githubInfoLoader } from './loaders/githubLoader.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> {/** Ye Nesting hai or jo iske ander hai vo outlet or har ek outlet nesting ho sakta hai */}
        <Route path='' element={<Home />}></Route>
        <Route path='about' element={<About />}>
          <Route path='anubhav'></Route>
        </Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='user/' element={<User />}>
          <Route path=':userid' element={<User />}></Route>
        </Route>
        <Route
          loader = {githubInfoLoader} 
          path='github' 
          element={<Github />}
        ></Route>
        <Route path='*' element={<div>Not Found</div>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
