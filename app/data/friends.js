module.exports.friendsArr = [
    {
        name: 'empty',
        photo: 'https://www.pictureshowent.com/wp-content/uploads/2017/05/0C1A4A56CCB5DA4F9D96C462868CEA20.jpeg',
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
