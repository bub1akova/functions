import _ from 'lodash';

// BEGIN
function takeOldest(users, a = 1) {
    const usersSorting = _.sortBy(users, (user) => {
        const result = Date.parse(user.birthday)
        return result
    })
    return usersSorting.slice(0, a)
}

export default takeOldest
// END