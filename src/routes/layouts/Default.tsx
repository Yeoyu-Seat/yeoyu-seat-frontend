import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';

export default function DefaultLayout() {
  return (
    <>
      // 헤더 추가
      <Outlet />
      <AppBar />
    </>
  );
}
