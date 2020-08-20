const controller = require("../controllers/approvalSteps");

module.exports = router => {
  router
    .route("/approval-steps")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/approval-steps/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/approval-steps/import").post(controller.import);
};