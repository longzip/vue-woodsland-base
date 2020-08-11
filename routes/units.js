const controller = require("../controllers/units");

module.exports = router => {
  router
    .route("/units")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/units/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/units/import").post(controller.import);
};
