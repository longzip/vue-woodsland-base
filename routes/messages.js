const controller = require("../controllers/messages");

module.exports = router => {
  router
    .route("/messages")
    .post(controller.add)
    .get(controller.getAll);

  router
    .route("/messages/:id")
    .get(controller.show)
    .delete(controller.delete)
    .put(controller.update);

  router.route("/messages/import").post(controller.import);
};