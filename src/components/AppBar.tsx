import { useDrawer } from '@/contexts/DrawerContext';
import { Link, useLocation } from 'react-router-dom';
import { TextStyle } from '../styles/TextStyle';
import { StyledText } from './StyledText';

interface NavTab {
  path: string;
  name: string;
  iconSrc: string;
}

export default function AppBar() {
  const location = useLocation();
  const { toggleHomeDrawer } = useDrawer();

  const navTabs: NavTab[] = [
    {
      path: '/',
      name: '홈',
      iconSrc: '/assets/icons/navigation/home.svg',
    },
    {
      path: '/bookmark',
      name: '즐겨찾기',
      iconSrc: '/assets/icons/navigation/mark.svg',
    },
    {
      path: '/coupon',
      name: '교환권',
      iconSrc: '/assets/icons/navigation/ticket.svg',
    },
    {
      path: '/mypage',
      name: 'MY',
      iconSrc: '/assets/icons/navigation/my.svg',
    },
  ];

  function isActiveTab(tabPath: string) {
    if (tabPath === '/') {
      return location.pathname === '/';
    } else {
      return (
        location.pathname.startsWith(tabPath) &&
        (location.pathname.length === tabPath.length ||
          location.pathname[tabPath.length] === '/')
      );
    }
  }

  /* 홈 탭 클릭 시 처리 함수 - 이미 홈 화면인 경우에만 드로어를 토글 */
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      toggleHomeDrawer();
    }
  };

  return (
    <div className="max-w-mobile fixed bottom-0 left-0 right-0 z-10 mx-auto flex h-[92px] w-full border-t border-g7 bg-g9 px-[2%] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {navTabs.map((tab, index) => {
        // 현재 탭이 활성화 상태인지 확인
        const active = isActiveTab(tab.path);

        return (
          <div
            key={index}
            className="relative flex h-full w-1/4 items-center justify-center"
          >
            <Link
              to={tab.path}
              className="no-underline"
              onClick={tab.path === '/' ? handleHomeClick : undefined}
            >
              <div className="flex flex-col items-center justify-center">
                {/* 탭 아이콘 */}
                <img
                  src={tab.iconSrc}
                  alt={`${tab.name} 아이콘`}
                  className="h-6 w-6"
                  style={{
                    filter: active ? 'invert(50%)' : 'invert(0%)',
                  }}
                />

                {/* 탭 이름 */}
                <StyledText
                  style={TextStyle.R4}
                  className={`mb-6 mt-1 ${active ? 'text-g1' : 'text-g4'}`}
                >
                  {tab.name}
                </StyledText>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
