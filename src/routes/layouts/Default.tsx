import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../../components/AppBar';

export default function DefaultLayout() {
  // 더블클릭 줌 방지를 위한 효과
  useEffect(() => {
    const preventDefault = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };

    // 더블클릭 이벤트 리스너 추가
    document.addEventListener('dblclick', preventDefault);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('dblclick', preventDefault);
    };
  }, []);

  return (
    <div className="touch-manipulation select-none">
      <Outlet />
      <AppBar />
    </div>
  );
}
