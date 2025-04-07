import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/Default';
import Bookmark from './pages/bookmark/Bookmark';
import Coupon from './pages/coupon/Coupon';
import Home from './pages/home/Home';
import MyPage from './pages/mypage/MyPage';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/bookmark', element: <Bookmark /> },
      { path: '/coupon', element: <Coupon /> },
      { path: '/mypage', element: <MyPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
