export enum TextStyle {
  // Bold 스타일
  B1 = 'B1', // Pretendard / Bold / Bold 1, 19px
  B2 = 'B2', // Pretendard / SemiBold / Bold 2, 17px
  B3 = 'B3', // Pretendard / SemiBold / Bold 3, 15px

  // Medium 스타일
  M1 = 'M1', // Pretendard / Bold / Mideum 1, 19px
  M2 = 'M2', // Pretendard / SemiBold / Mideum 2, 17px
  M3 = 'M3', // Pretendard / SemiBold / Mideum 3, 15px
  M4 = 'M4', // Pretendard / SemiBold / Mideum 4, 13px

  // Regular 스타일
  R1 = 'R1', // Pretendard / Bold / Regular 1, 19px
  R2 = 'R2', // Pretendard / SemiBold / Regular 2, 17px
  R3 = 'R3', // Pretendard / SemiBold / Regular 3, 15px
  R4 = 'R4', // Pretendard / SemiBold / Regular 4, 13px
}

export type TextStyleType =
  | TextStyle.B1
  | TextStyle.B2
  | TextStyle.B3
  | TextStyle.M1
  | TextStyle.M2
  | TextStyle.M3
  | TextStyle.M4
  | TextStyle.R1
  | TextStyle.R2
  | TextStyle.R3
  | TextStyle.R4;
