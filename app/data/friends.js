module.exports.friendsArr = [
    {
        name: 'empty',
        photo: '#',
        answers: [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
];

module.exports.addFriend = function(val) {
    module.exports.friendsArr.push(val);
}
