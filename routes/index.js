const users = require("./users");
const muaHangs = require("./muaHangs");
const costcenters = require("./costcenters");

module.exports = router => {
  users(router);
  muaHangs(router);
  costcenters(router);
  return router;
};
