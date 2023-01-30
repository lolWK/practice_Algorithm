function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];
    if (aGab === bGab) return b - a;
    return aGab - bGab;
  });
}

solution([1, 2, 3, 4, 5, 6], 4);
