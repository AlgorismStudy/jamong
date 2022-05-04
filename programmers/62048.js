function solution(w, h) {
  const gcdVal = gcd(w, h);
  return w * h - (w + h - gcdVal);
}

console.log(solution(8, 12) == 80);
//사용가능한 사각형 개수 반환
//대각선이 지나는 사각현 개수 = W + H - (W, H의 최대 공약수)
// 최대공약수 : 유클리드 호제법 사용
//

function gcd(w, h) {
  const mod = w % h;
  if (mod === 0) {
    return h;
  }
  return gcd(h, mod);
}


//https://noogoonaa.tistory.com/74