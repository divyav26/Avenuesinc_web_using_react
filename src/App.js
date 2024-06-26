import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Ourclients from './pages/clients/Ourclients';
import StrategicPartnership from './pages/clients/StrategicPartnership';
import Certifications from './pages/clients/Certifications';
import Cloudapplication from './pages/services/Cloudapplication';
import CloudStrategy from './pages/services/CloudStrategy';
import Bigdata from './pages/services/Bigdata';
import Datawarehousing from './pages/services/Datawarehousing';
import ITservices from './pages/services/ITservices';
import Goodssuplies from './pages/services/Goodssuplies';

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
    path:'/Cloudapplication',
    element:<Cloudapplication />
  },

  {
    path:'/CloudStrategy',
    element:<CloudStrategy />
  },
  {
    path:'/bigdata',
    element:<Bigdata />
  },
  {
    path:'/datawarehousing',
    element:<Datawarehousing />
  },
  {
    path:'/ITservices',
    element:<ITservices />
  },
  {
    path:'/Goodssuplies',
    element:<Goodssuplies />
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
