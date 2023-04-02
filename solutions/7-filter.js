// BEGIN
function getGirlFriends(users) {
    let friends = []
    for (let user of users) {
        friends.push(user.friends)
    }
    const girlFriends = friends.flat().filter(friend => friend.gender == 'female')
    return girlFriends
}

export default getGirlFriends
// END