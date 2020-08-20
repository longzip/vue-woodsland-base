const controller = require("../controllers/proposalForms");

module.exports = router => {
  router
    .route("/proposal-forms")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/proposal-forms/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/proposal-forms/import").post(controller.import);
};