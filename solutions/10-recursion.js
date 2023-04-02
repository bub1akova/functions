const sequenceSum = (begin, end) => {
    // BEGIN
    if (begin > end) return NaN
    if (begin == end)  return begin
    return sequenceSum(begin + 1, end) + begin
    // END
  };
  
export default sequenceSum;
  