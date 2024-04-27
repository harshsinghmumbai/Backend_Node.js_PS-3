var express = require("express");
var router = express.Router();
const userModel = require("./users");

router.get("/", function (req, res) {
  res.cookie("Name", 18);
  res.render("index");
});

router.get("/read", function (req, res) {
  console.log(res.cookie.Name);
  res.send("check");
});

router.get("/delete", function (req, res) {
  res.clearCookie("Name");
  res.send("clear hogaya");
});

router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("you are banned");
  } else {
    res.send("not banned");
  }
});

router.get("/removeban", function (req, res) {
  req.session.destroy(function (error) {
    if (error) throw error;
    res.send("ban removed");
  });
});

router.get("/delete", async function (req, res) {
  let deleteuser = await userModel.findOneAndDelete({
    username: "harsh singh",
  });
  res.send(deleteuser);
});

router.get("/allusers", async function (req, res) {
  let all = await userModel.find();
  res.send(all);
});

module.exports = router;
