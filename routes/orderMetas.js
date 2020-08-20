const controller = require("../controllers/orderMetas");

module.exports = router => {
  router
    .route("/order-metas")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/order-metas/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/order-metas/import").post(controller.import);
};