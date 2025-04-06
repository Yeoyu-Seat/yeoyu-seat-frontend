import { StyledText } from '../../../components/StyledText';
import { TextStyle } from '../../../styles/TextStyle';

export default function Bookmark() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {/* <h1 className="text-5xl font-bold">여유있냥</h1> */}
      <StyledText style={TextStyle.B1} className="text-p1">
        즐겨찾기
      </StyledText>
      <StyledText style={TextStyle.R1} className="text-a">
        나는 west kite에요~
      </StyledText>
    </div>
  );
}
