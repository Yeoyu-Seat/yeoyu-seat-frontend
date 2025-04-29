import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface KakaoMapProps {
  width?: string;
  height?: string;
  className?: string;
}

const KakaoMap: React.FC<KakaoMapProps> = ({
  width = '100%',
  height = '100%',
  className = '',
}) => {
  // 국민은행 세종대의 좌표를 기본값으로 설정
  const [position, setPosition] = useState({
    lat: 37.5481534,
    lng: 127.0733985,
  });

  // 현재 위치를 가져오는 함수
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('현재 위치를 가져오는데 실패했습니다:', error);
        },
      );
    }
  }, []);

  return (
    <div className={className} style={{ width, height }}>
      <Map
        center={position}
        style={{ width: '100%', height: '100%' }}
        level={3}
      >
        <MapMarker position={position} />
      </Map>
    </div>
  );
};

export default KakaoMap;
