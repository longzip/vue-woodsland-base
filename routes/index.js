const users = require("./users");
const units = require("./units");
const orders = require("./orders");
const orderLines = require("./orderLines");
const muaHangs = require("./muaHangs");
const costcenters = require("./costcenters");
const requests = require("./requests");
const messages = require("./messages");
const approvalSteps = require("./approvalSteps");
const proposalForms = require("./proposalForms");
const orderMetas = require("./orderMetas");

module.exports = router => {
  orderLines(router);
  orders(router);
  units(router);
  users(router);
  muaHangs(router);
  orderMetas(router);
  proposalForms(router);
  approvalSteps(router);
  messages(router);
  requests(router);
  costcenters(router);
  return router;
};