const users = require("./users");
const units = require("./units");
const orders = require("./orders");
const orderLines = require("./orderLines");
const muaHangs = require("./muaHangs");
const costcenters = require("./costcenters");
const requests = require("./requests");

module.exports = router => {
  orderLines(router);
  orders(router);
  units(router);
  users(router);
  muaHangs(router);
  requests(router);
  costcenters(router);
  return router;
};
