const controller = require("../controllers/muaHangs.js");

module.exports = router => {
  router
    .route("/mua-hangs")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/mua-hangs/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);
};
