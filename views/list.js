module.exports = function (req, res) {
  const items = require("../storage");

  res.render("list.html", { items: items });
};
