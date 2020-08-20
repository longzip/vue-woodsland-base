const {
  ApprovalStep,
  data
} = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateApprovalStep(value) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    approvalableId: Joi.string(),
    approvalableType: Joi.string(),
    position: Joi.string().required(),
    name: Joi.string().required(),
    isDisable: Joi.boolean().required(),
    showMessages: Joi.boolean().required()
  });
  return schema.validate(value);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let approvalStep = await ApprovalStep.findByPk(req.params.id);
      if (approvalStep === null) {
        status = 400;
      } else {
        let affectedRows = await approvalStep.destroy();
        result.data = affectedRows;
      }
    } catch (error) {
      status = 500;
      console.log(error);
      result.error = error;
    }

    return res.status(status).send(result);
  },

  add: async (req, res) => {
    let result = {};
    let status = 201;

    let {
      error,
      value
    } = validateApprovalStep(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let approvalStep = await ApprovalStep.create(value, {
        include: []
      });
      result.data = approvalStep;
    } catch (error) {
      status = 500;
      console.log(error);
      result.error = error;
    }

    return res.status(status).send(result);
  },

  show: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let approvalStep = await ApprovalStep.findByPk(req.params.id);
      if (approvalStep == null) {
        status = 400;
      } else {
        result.data = approvalStep;
      }
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }

    return res.status(status).send(result);
  },

  update: async (req, res) => {
    let result = {};
    let status = 201;

    let {
      error,
      value
    } = validateApprovalStep(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let affectedRows = await ApprovalStep.update(value, {
        where: {
          id: req.params.id
        }
      });
      result.data = affectedRows;
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }
    return res.status(status).send(result);
  },

  getAll: async (req, res) => {
    let result = {};
    let status = 200;
    let {
      approvalableId
    } = req.query;
    try {
      let approvalSteps = await ApprovalStep.findAll({
        where: {
          approvalableId
        },
        order: [
          ["sequence", 'DESC']
        ]
      });
      result.data = approvalSteps;
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }
    return res.status(status).send(result);
  },
  import: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let approvalSteps = await ApprovalStep.bulkCreate(req.body);
      result.data = approvalSteps;
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }
    return res.status(status).send(result);
  },
  backup: async (req, res) => {
    let result = {};
    let status = 200;
    result.data = await data.approvalSteps;
    return res.status(status).send(result);
  }
};