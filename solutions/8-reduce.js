// BEGIN
function groupBy(students, k) {
    let group = []
    for (let student of students) {
        let i = student[k]
        if (!group[i]) group[i] = []
        group[i].push(student)
    }
    return group
}
export default groupBy
// END