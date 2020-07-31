const users = require("./users");
const muaHangs = require("./muaHangs");

module.exports = router => {
  users(router);
  muaHangs(router);
  return router;
};
