const express = require("express");
const path = require("path");

const api = require("./app/routing/apiRoutes");
const htm = require("./app/routing/htmlRoutes");

let app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.send(path.join(__dirname, "../app/public/home.html"));
});

api.getter(app);
api.poster(app);

htm.survey(app);
htm.home(app);

app.listen(process.env.PORT || PORT, function() {
    console.log("connected to port " + PORT);
})
