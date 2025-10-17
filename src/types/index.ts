export interface UserData {
  fullName: string;
  contactNo: string;
}

export interface LotteryResult {
  isWinner: boolean;
  message: string;
  prize?: string;
  drawDate?: string;
  serialNo: string;
}

export interface WinningNumber {
  prize: string;
  drawDate: string;
}

export type WinningNumbersMap = {
  [key: string]: WinningNumber;
};