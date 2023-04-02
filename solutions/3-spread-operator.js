// BEGIN
function convert(...dates) {
    let convertedDates = []
    for (let i of dates) {
        let date = new Date(...i)
        convertedDates[convertedDates.length] = date.toDateString()
    }
    return convertedDates
}
export default convert
// END