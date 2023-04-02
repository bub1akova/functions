// BEGIN
function getChildren(users) {
    const children = users.map(users1 => users1.children)
    const flatChildren = children.flat()
    return flatChildren
}

export default getChildren
// END