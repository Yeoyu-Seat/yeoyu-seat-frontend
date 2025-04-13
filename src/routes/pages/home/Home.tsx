import KakaoMap from '../../../components/KakaoMap';
import { CongestionButton } from '@/components/features/CongestionButton';
import { SearchBox } from '@/components/features/SearchBox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <KakaoMap width="100%" height="100%" />

      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '20px',
          zIndex: 1,
        }}
      >
        <Button>버튼</Button>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '20px',
          zIndex: 1,
        }}
      >
        <CongestionButton></CongestionButton>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '500px',
          zIndex: 1,
        }}
      >
        <SearchBox />

        <div className="hide-scrollbar mt-2 flex flex-row gap-1 overflow-x-auto px-1 pb-2">
          <Badge
            variant="default"
            className="flex-shrink-0 cursor-pointer whitespace-nowrap"
          >
            영업 중
          </Badge>
          <Badge
            variant="default"
            className="flex-shrink-0 cursor-pointer whitespace-nowrap"
          >
            혼잡도 낮은 순
          </Badge>
          <Badge
            variant="default"
            className="flex-shrink-0 cursor-pointer whitespace-nowrap"
          >
            가까운 순
          </Badge>
          <Badge
            variant="default"
            className="flex-shrink-0 cursor-pointer whitespace-nowrap"
          >
            추천 순
          </Badge>
        </div>
      </div>
    </div>
  );
}
