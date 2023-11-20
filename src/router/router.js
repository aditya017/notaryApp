import { createBrowserRouter, Navigate } from 'react-router-dom'
import NotaryApp from '../NotaryApp'
import NotaryAppBase from '../NotaryAppBase'
import ContactUs from '../components/contactUs'
import AboutUs from '../components/aboutUs'
import SignUp from '../components/signUp'
import Login from '../components/login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NotaryAppBase />,
    children: [
      {
        index: true,
        element: <Navigate to="/notaryFinder" replace />,
      },
      {
        path: 'notaryFinder',
        element: <NotaryApp />,
      },
      {
        path: 'contactUs',
        element: <ContactUs />,
      },
      {
        path: 'aboutUs',
        element: <AboutUs />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
])

export default router
