import { Benefit } from "../types/benefits";


export const sliceArray = (arr: Benefit[], number: number) => {
  return arr.slice(number, number+1);
}