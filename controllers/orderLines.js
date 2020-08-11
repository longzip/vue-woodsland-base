const { OrderLine, data } = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateUser(orderLine) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    costcenterId: Joi.string().required(),
    companyId: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required(),
    note: Joi.string().required(),
    status: Joi.string().required()
  });
  return schema.validate(orderLine);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let orderLine = await OrderLine.findByPk(req.params.id);
      if (orderLine === null) {
        status = 400;
      } else {
        let affectedRows = await orderLine.destroy();
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

    let { error, value } = validateUser(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let orderLine = await orderLine.create(value, {
        include: []
      });
      result.data = orderLine;
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
      let orderLine = await OrderLine.findByPk(req.params.id);
      if (orderLine == null) {
        status = 400;
      } else {
        result.data = orderLine;
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

    let { error, value } = validateUser(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let orderLine = await orderLine.findByPk(req.params.id);
      if (orderLine == null) {
        status = 400;
      } else {
        orderLine.userId = value.userId;
        orderLine.costcenterId = value.costcenterId;
        orderLine.companyId = value.companyId;
        orderLine.code = value.code;
        orderLine.name = value.name;
        orderLine.note = value.note;
        orderLine.status = value.status;
        result.data = await orderLine.save();
      }
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
      let orderLines = await OrderLine.findAll();
      result.data = orderLines;
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
      let orderLines = await OrderLine.bulkCreate(req.body);
      result.data = orderLines;
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
    result.data = await data.orderLines;
    return res.status(status).send(result);
  }
};
