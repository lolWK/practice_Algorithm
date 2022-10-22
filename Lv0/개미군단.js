function solution(hp) {
  const attack = damage => {
    return damage;
  };

  let bigAnt = Math.floor(hp / attack(5));
  let middleAnt = Math.floor((hp - bigAnt * attack(5)) / attack(3));
  let smallAnt = Math.floor(hp - bigAnt * attack(5) - middleAnt * attack(3));

  return bigAnt + middleAnt + smallAnt;
}

// etc

function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}
