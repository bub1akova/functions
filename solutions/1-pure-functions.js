// BEGIN
function isPrime(number) {
  if (number <= 1) return false
  let i = 2
  while (i <= number ** 0.5) {
      if (number % i == 0) return false
      i++
  }
  return true
}
function sayPrimeOrNot(number) {
  if (isPrime(number)) {
      console.log('yes')
  } else {
      console.log('no')
  }
}
export default sayPrimeOrNot
// END