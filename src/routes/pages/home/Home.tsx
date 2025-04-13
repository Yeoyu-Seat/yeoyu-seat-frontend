import KakaoMap from '../../../components/KakaoMap';
import { CongestionButton } from '@/components/features/CongestionButton';
import { SearchBox } from '@/components/features/SearchBox';
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
      </div>
    </div>
  );
}
