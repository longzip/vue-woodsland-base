const users = require("./users");
const units = require("./units");
const muaHangs = require("./muaHangs");
const costcenters = require("./costcenters");

module.exports = router => {
  units(router);
  users(router);
  muaHangs(router);
  costcenters(router);
  return router;
};
