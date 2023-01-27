function solution(p, d) {
  return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo']);
