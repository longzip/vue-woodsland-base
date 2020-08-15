const controller = require("../controllers/requests");

module.exports = router => {
  router
    .route("/requests")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/requests/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/requests/import").post(controller.import);
};
