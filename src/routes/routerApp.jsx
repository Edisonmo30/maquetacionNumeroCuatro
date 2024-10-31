import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ErrorNotFound from '../pages/ErrorNotFound'
import Panel from '../pages/Panel'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/panel',
    element: <Panel />
  },
  {
    path: '*', // Ruta para manejar errores 404.
    element: <ErrorNotFound />
  }
])

export default router
