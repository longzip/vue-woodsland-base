const controller = require("../controllers/costcenters");

module.exports = router => {
  router
    .route("/costcenters")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/costcenters/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/costcenters/import").post(controller.import);
};
