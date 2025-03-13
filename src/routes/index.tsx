import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
