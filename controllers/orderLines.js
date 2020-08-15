const {
  OrderLine,
  data
} = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateUser(orderLine) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    costcenterId: Joi.string().required(),
    orderId: Joi.string().required(),
    companyId: Joi.string().required(),
    unitId: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required(),
    title: Joi.string().required(),
    quantity: Joi.number().required(),
    note: Joi.string(),
    origin: Joi.string(),
    startedAt: Joi.date().required(),
    finishedAt: Joi.date().required(),
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

    let {
      error,
      value
    } = validateUser(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let orderLine = await OrderLine.create(value, {
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

    let {
      error,
      value
    } = validateUser(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let orderLine = await OrderLine.findByPk(req.params.id);
      if (orderLine == null) {
        status = 400;
      } else {
        orderLine.userId = value.userId;
        orderLine.orderId = value.orderId;
        orderLine.costcenterId = value.costcenterId;
        orderLine.companyId = value.companyId;
        orderLine.unitId = value.unitId;
        orderLine.code = value.code;
        orderLine.name = value.name;
        orderLine.title = value.title;
        orderLine.quantity = value.quantity;
        orderLine.note = value.note;
        orderLine.startedAt = value.startedAt;
        orderLine.finishedAt = value.finishedAt;
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