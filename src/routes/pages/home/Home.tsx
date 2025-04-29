import KakaoMap from '../../../components/KakaoMap';
import { ChipItem, Chips } from '@/components/features/Chips';
import { HomeDrawer } from '@/components/features/HomeDrawer';
import { SearchBox } from '@/components/features/SearchBox';

export default function Home() {
  const chipItems: ChipItem[] = [
    { id: '1', label: '영업 중' },
    { id: '2', label: '혼잡도 낮은 순' },
    { id: '3', label: '가까운 순' },
    { id: '4', label: '추천 순' },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* 지도  */}
      <div className="absolute inset-0 z-0">
        <KakaoMap width="100%" height="100%" />
      </div>

      {/* 검색창 */}
      <div className="absolute left-1/2 top-10 z-20 w-[90%] max-w-[500px] -translate-x-1/2">
        <SearchBox />
      </div>

      {/* 필터 칩 */}
      <div className="absolute left-1/2 top-[calc(2.5rem+44px+0.7rem)] z-10 w-[90%] max-w-[500px] -translate-x-1/2">
        <Chips items={chipItems} />
      </div>

      <div>
        <HomeDrawer />
      </div>
    </div>
  );
}
