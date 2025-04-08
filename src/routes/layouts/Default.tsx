import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
      <AppBar />
    </>
  );
}
