const users = require("./users");
const units = require("./units");
const orders = require("./orders");
const orderLines = require("./orderLines");
const muaHangs = require("./muaHangs");
const costcenters = require("./costcenters");

module.exports = router => {
  orderLines(router);
  orders(router);
  units(router);
  users(router);
  muaHangs(router);
  costcenters(router);
  return router;
};
