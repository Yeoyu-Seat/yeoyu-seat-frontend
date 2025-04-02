import { StyledText } from '../../components/StyledText';
import { TextStyle } from '../../styles/TextStyle';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      {/* <h1 className="text-5xl font-bold">여유있냥</h1> */}
      <StyledText style={TextStyle.B1} className="text-p1">
        여유있냥
      </StyledText>
      <StyledText style={TextStyle.R1} className="text-p2">
        나는 west kite에요~
      </StyledText>
    </div>
  );
}
