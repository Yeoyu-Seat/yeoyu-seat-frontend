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

export function HomeDrawer() {
  const { activeSnap, setActiveSnap } = useDrawer();

  return (
    <Drawer
      snapPoints={snapPoints}
      activeSnapPoint={activeSnap}
      setActiveSnapPoint={setActiveSnap}
      modal={false}
      defaultOpen={true}
    >
      <DrawerContent className="mx-auto h-full max-h-[80%] w-full min-w-[320px] max-w-[412px] flex-shrink-0">
        {/* 스크린 리더를 위한 접근성 타이틀 (화면에는 보이지 않음) */}
        <DrawerTitle className="sr-only"></DrawerTitle>
        <DrawerDescription className="sr-only"></DrawerDescription>

        {/* 드로어 내부 컨텐츠 컨테이너 */}
        <div
          className={clsx('flex flex-col px-4', {
            'overflow-y-auto': activeSnap === snapPoints[2],
            'overflow-hidden': activeSnap !== snapPoints[2],
          })}
        >
          {/* 사용자 정보 섹션 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-g3">
              <StyledText style={TextStyle.M3}>김서연</StyledText>
            </div>

            <div className="flex items-center text-g4">
              <StyledText style={TextStyle.M4}>강서구 구구구</StyledText>
            </div>
          </div>

          {/* 빠른 액션 버튼 그리드 */}
          <div className="mt-4 flex justify-between">
            <div className="h-[76px] w-[76px]">
              <Button
                variant="outline"
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border-g7 bg-g9 p-0"
              >
                <StyledText style={TextStyle.R4} className="text-g4">
                  위치 공유
                </StyledText>
              </Button>
            </div>

            <div className="h-[76px] w-[76px]">
              <Button
                variant="outline"
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border-g7 bg-g9 p-0"
              >
                <StyledText style={TextStyle.R4} className="text-g4">
                  카페 랭킹
                </StyledText>
              </Button>
            </div>

            <div className="h-[76px] w-[76px]">
              <Button
                variant="outline"
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border-g7 bg-g9 p-0"
              >
                <StyledText style={TextStyle.R4} className="text-g4">
                  즐겨찾기
                </StyledText>
              </Button>
            </div>

            <div className="h-[76px] w-[76px]">
              <Button
                variant="outline"
                className="flex h-full w-full flex-col items-center justify-center rounded-lg border-dashed border-g7 bg-g9 p-0"
              >
                <StyledText style={TextStyle.R4} className="text-g4">
                  추가/편집
                </StyledText>
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
