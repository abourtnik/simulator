export function calculatedYield (initial: number, rate: number, year: number) : number {
    return initial * Math.pow((1 + rate / 100), year * 12);
}
