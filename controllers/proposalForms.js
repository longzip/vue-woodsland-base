const {
  ProposalForm,
  data
} = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateProposalForm(value) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    approvalableId: Joi.string(),
    approvalableType: Joi.string(),
    costcenterId: Joi.string(),
    companyId: Joi.string(),
    title: Joi.string().required(),
    status: Joi.string().required(),
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
      let proposalForm = await ProposalForm.findByPk(req.params.id);
      if (proposalForm === null) {
        status = 400;
      } else {
        let affectedRows = await proposalForm.destroy();
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
    } = validateProposalForm(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let proposalForm = await ProposalForm.create(value, {
        include: []
      });
      result.data = proposalForm;
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
      let proposalForm = await ProposalForm.findByPk(req.params.id);
      if (proposalForm == null) {
        status = 400;
      } else {
        result.data = proposalForm;
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
    } = validateProposalForm(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let affectedRows = await ProposalForm.update(value, {
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
    try {
      let proposalForms = await ProposalForm.findAll({
        // order: [
        //   ["sequence", 'DESC']
        // ]
      });
      result.data = proposalForms;
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
      let proposalForms = await ProposalForm.bulkCreate(req.body);
      result.data = proposalForms;
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
    result.data = await data.proposalForms;
    return res.status(status).send(result);
  }
};