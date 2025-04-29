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

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      toggleHomeDrawer();
    }
  };

  return (
    <div className="fixed bottom-0 z-10 flex h-[92px] w-full min-w-[320px] border-t border-g7 bg-g9 px-[2%] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      {navTabs.map((tab, index) => (
        <div
          key={index}
          className="relative flex h-full w-1/4 items-center justify-center"
        >
          <Link
            to={tab.path}
            className="no-underline"
            onClick={tab.path === '/' ? handleHomeClick : undefined}
          >
            <div
              className={`flex flex-col items-center justify-center ${isActiveTab(tab.path) ? 'text-g1' : 'text-g4'}`}
            >
              <img
                src={tab.iconSrc}
                alt={`${tab.name} 아이콘`}
                className="h-6 w-6"
                style={{
                  filter: isActiveTab(tab.path) ? 'invert(50%)' : 'invert(0%)',
                }}
              />
              <StyledText
                style={TextStyle.R4}
                className={`mb-6 mt-1 ${isActiveTab(tab.path) ? 'text-g1' : 'text-g4'}`}
              >
                {tab.name}
              </StyledText>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
