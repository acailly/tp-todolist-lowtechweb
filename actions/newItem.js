module.exports = function (req, res) {
  console.log("DEBUG", "ACTION", "NEW ITEM");

  // TODO: Ajouter ici la logique d'ajout d'un élément

  res.redirect(302, `/list`);
};
