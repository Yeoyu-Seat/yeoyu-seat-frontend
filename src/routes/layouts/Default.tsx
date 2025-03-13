import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      // 헤더 추가
      <Outlet />
    </>
  );
}
