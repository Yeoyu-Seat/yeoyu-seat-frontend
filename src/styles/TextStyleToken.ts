import { TextStyle, TextStyleType } from './TextStyle';

export const getTextStyleClass = (style: TextStyleType): string => {
  switch (style) {
    // Bold 스타일 - font-bold 사용
    case TextStyle.B1:
      return 'font-pretendard font-bold text-[19px] leading-[140%]';
    case TextStyle.B2:
      return 'font-pretendard font-bold text-[17px] leading-[140%]';
    case TextStyle.B3:
      return 'font-pretendard font-bold text-[15px] leading-[140%]';

    // Medium 스타일 - font-medium 사용
    case TextStyle.M1:
      return 'font-pretendard font-medium text-[19px] leading-[140%]';
    case TextStyle.M2:
      return 'font-pretendard font-medium text-[17px] leading-[140%]';
    case TextStyle.M3:
      return 'font-pretendard font-medium text-[15px] leading-[140%]';
    case TextStyle.M4:
      return 'font-pretendard font-medium text-[13px] leading-[140%]';

    // Regular 스타일 - font-normal 사용
    case TextStyle.R1:
      return 'font-pretendard font-normal text-[19px] leading-[140%]';
    case TextStyle.R2:
      return 'font-pretendard font-normal text-[17px] leading-[140%]';
    case TextStyle.R3:
      return 'font-pretendard font-normal text-[15px] leading-[140%]';
    case TextStyle.R4:
      return 'font-pretendard font-normal text-[13px] leading-[140%]';

    default:
      return '';
  }
};
