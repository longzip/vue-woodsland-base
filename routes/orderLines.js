const controller = require("../controllers/orderLines");

module.exports = router => {
  router
    .route("/order-lines")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/order-lines/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/order-lines/import").post(controller.import);
};
