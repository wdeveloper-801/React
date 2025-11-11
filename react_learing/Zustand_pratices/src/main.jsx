
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Page1 from './Components/Page1.jsx'
import Page2 from './Components/zustand Store/Page2.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='page1' element={<Page1 />} />
      <Route path='page2' element={<Page2 />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
