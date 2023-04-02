import _ from 'lodash';

// BEGIN
function average(...numbers) {
    if (numbers.length === 0) return null
    let sum = _.sum(numbers), count = numbers.length, sum1 = sum / count
    return sum1
}
export default average
// END