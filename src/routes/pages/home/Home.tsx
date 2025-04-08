import KakaoMap from '../../../components/KakaoMap';

export default function Home() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <KakaoMap width="100%" height="100%" />
    </div>
  );
}
