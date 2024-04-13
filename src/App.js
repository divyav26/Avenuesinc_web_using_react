import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourclients from './pages/clients/Ourclients';
import StrategicPartnership from './pages/clients/StrategicPartnership';
import Certifications from './pages/clients/Certifications';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
  },
  {
    path:'/about',
    element:<About />,
  },
  {
    path:'/contact',
    element:<Contact />,
  },

  {
    path:'/Ourclients',
    element:<Ourclients />,
  },
  {
    path:'/StrategicPartnership',
    element:<StrategicPartnership />,
  },
  {
    path:'/Certifications',
    element:<Certifications />,
  },
])

function App() {
  return (
   <div className='w-full overflow-hidden'>
   <RouterProvider router={router} />
   </div>
  );
}

export default App;
