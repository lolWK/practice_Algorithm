function kangaroo(x1, v1, x2, v2) {
  // 같은 시간 같은 위치에 있는 캥거루 가능하면 YES 불가능 NO
  // x1 + v1 * jump = x2 + v2 * jump
  const jump = (x2 - x1) / (v1 - v2);
  if (Number.isInteger(jump) && jump >= 0) return 'YES';
  return 'NO';
}

kangaroo(0, 3, 4, 2);
