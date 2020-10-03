module.exports = function (req, res) {
  const items = ["Elliot", "Darlene", "Anjela"];

  res.render("list.html", { items: items });
};
