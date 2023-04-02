const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) return 1
    if (num % 2 == 0) return 2
    let i = 2
    while (i <= num) {
        if (num % i == 0) return i
        i++
    }
    return num
    // END
  };
  
export default smallestDivisor;
  