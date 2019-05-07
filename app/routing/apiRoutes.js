const friends = require("../data/friends");

module.exports.getter = function(app) {
    app.get("/api/friends", function(req, res) {
        let arr = friends.friendsArr;

        res.json(arr);
    });
}

module.exports.poster = function(app) {
    app.post("/api/friends", function(req, res) {
        let newFriend = req.body;
        console.log(newFriend);

        let friend;
        let bestScore = 1000000;

        for(let i = 0; i < friends.friendsArr.length; i++) {
            let score = 0;
            for(let j = 0; j < friends.friendsArr[i].answers.length; j++) {
                let newAns = newFriend.answers[j];
                let friendAns = friends.friendsArr[i].answers[j];

                score += Math.abs(newAns - friendAns);
            }

            if(score < bestScore) {
                friend = friends.friendsArr[i];
            }
        }

        friends.addFriend(newFriend);
        res.json(friend);
    })
}
