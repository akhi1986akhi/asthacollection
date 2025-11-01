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
  productType?:string;
}

export interface WinningNumber {
  prize: string;
  drawDate: string;
  productType:string
}

export type WinningNumbersMap = {
  [key: string]: WinningNumber;
};