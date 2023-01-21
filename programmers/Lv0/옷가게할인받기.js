function solution(price) {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  } else {
    return price;
  }
}

// else

function solution(price) {
  return price >= 500000
    ? Math.floor(price * (1 - 0.2))
    : price >= 300000
    ? Math.floor(price * (1 - 0.1))
    : price >= 100000
    ? Math.floor(price * (1 - 0.05))
    : price;
}
