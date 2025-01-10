const cheer = (req, res) => {
  res.send("GO BYU");
}

const alamo = (req, res) => {
  res.send("BYU 36-14 Colorado");
}

module.exports = {
  cheer,
  alamo
};