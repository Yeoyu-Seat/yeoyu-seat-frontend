import { snapPoints, useDrawer } from '@/contexts/DrawerContext';
import { TextStyle } from '@/styles/TextStyle';
import { StyledText } from '../StyledText';
import { Button } from '../ui/button';
import { clsx } from 'clsx';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from '@/components/ui/drawer';

interface QuickActionButton {
  text: string;
  isDashed?: boolean;
}

export function HomeDrawer() {
  const { activeSnap, setActiveSnap } = useDrawer();

  const quickActions: QuickActionButton[] = [
    { text: '위치 공유' },
    { text: '카페 랭킹' },
    { text: '즐겨찾기' },
    { text: '추가/편집', isDashed: true },
  ];

  return (
    <Drawer
      snapPoints={snapPoints}
      activeSnapPoint={activeSnap}
      setActiveSnapPoint={setActiveSnap}
      modal={false}
      defaultOpen={true}
    >
      <DrawerContent className="max-w-mobile mx-auto h-full max-h-[80%] w-full flex-shrink-0">
        {/* 스크린 리더를 위한 접근성 타이틀 (화면에는 보이지 않음) */}
        <DrawerTitle className="sr-only"></DrawerTitle>
        <DrawerDescription className="sr-only"></DrawerDescription>

        {/* 드로어 내부 컨텐츠 컨테이너 */}
        <div
          className={clsx(
            'flex flex-col px-4',
            activeSnap === snapPoints[2]
              ? 'overflow-y-auto'
              : 'overflow-hidden',
          )}
        >
          {/* 사용자 정보 섹션 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-g3">
              <StyledText style={TextStyle.M3} className="flex-shrink-0">
                김서연
              </StyledText>
            </div>

            <div className="flex items-center text-g4">
              <StyledText style={TextStyle.M4} className="flex-shrink-0">
                강서구 구구구
              </StyledText>
            </div>
          </div>

          {/* 빠른 액션 버튼 그리드 */}
          <div className="mt-4 flex justify-between">
            {quickActions.map((action, index) => (
              <div key={index} className="h-[80px] w-[80px]">
                <Button
                  variant="outline"
                  className={clsx(
                    'flex h-full w-full flex-col items-center justify-center rounded-lg bg-g9 p-0',
                    action.isDashed ? 'border-dashed border-g7' : 'border-g7',
                  )}
                >
                  <StyledText
                    style={TextStyle.R4}
                    className="flex-shrink-0 text-center text-g4"
                  >
                    {action.text}
                  </StyledText>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
