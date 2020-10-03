module.exports = function (req, res) {
  console.log("DEBUG", "ACTION", "NEW ITEM");

  // TODO: Ajouter ici la logique d'ajout d'un élément
  const itemTitle = req.body.title;

  const items = require("../storage");
  items.push(itemTitle);

  res.redirect(302, `/list`);
};
