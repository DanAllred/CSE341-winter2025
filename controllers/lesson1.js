const cheer = (req, res) => {
  res.send("GO BYU");
}

const alamo = (req, res) => {
  res.send("BYU 36-14 Colorado");
}

const asu = (req, res) => {
  res.send("Arizona State 28-23 BYU");
}

const kansas = (req, res) => {
  res.send("Kansas 17-13 BYU");
}

module.exports = {
  cheer,
  alamo,
  asu,
  kansas
};