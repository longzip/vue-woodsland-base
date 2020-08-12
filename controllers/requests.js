const { Request, data } = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateRequest(value) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    orderableId: Joi.string().required(),
    orderableType: Joi.string().required(),
    costcenterId: Joi.string().required(),
    companyId: Joi.string().required(),
    title: Joi.string().required(),
    completed: Joi.boolean().required()
  });
  return schema.validate(value);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let request = await Request.findByPk(req.params.id);
      if (request === null) {
        status = 400;
      } else {
        let affectedRows = await request.destroy();
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

    let { error, value } = validateRequest(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let request = await Request.create(value, {
        include: []
      });
      result.data = request;
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
      let request = await Request.findByPk(req.params.id);
      if (request == null) {
        status = 400;
      } else {
        result.data = request;
      }
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }

    return res.status(status).send(result);
  },

  update: async (req, res) => {
    let { id } = req.params;
    let result = {};
    let status = 201;

    let { error, value } = validateRequest(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let request = await Request.findByPk(id);
      if (request === null) {
        status = 400;
      } else {
        request.userId = value.userId;
        request.costcenterId = value.costcenterId;
        request.companyId = value.companyId;
        request.title = value.title;
        request.completed = value.completed;
      }
      let affectedRows = await request.save();
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
      let requests = await Request.findAll();
      result.data = requests;
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
      let requests = await Request.bulkCreate(req.body);
      result.data = requests;
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
    result.data = await data.requests;
    return res.status(status).send(result);
  }
};
