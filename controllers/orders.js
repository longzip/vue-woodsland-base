const { Order, data } = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateUser(order) {
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
  return schema.validate(order);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let order = await Order.findByPk(req.params.id);
      if (order === null) {
        status = 400;
      } else {
        let affectedRows = await order.destroy();
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
      let order = await order.create(value, {
        include: []
      });
      result.data = order;
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
      let order = await Order.findByPk(req.params.id);
      if (order == null) {
        status = 400;
      } else {
        result.data = order;
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
      let order = await order.findByPk(req.params.id);
      if (order == null) {
        status = 400;
      } else {
        order.userId = value.userId;
        order.costcenterId = value.costcenterId;
        order.companyId = value.companyId;
        order.code = value.code;
        order.name = value.name;
        order.note = value.note;
        order.status = value.status;
        result.data = await order.save();
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
      let orders = await Order.findAll();
      result.data = orders;
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
      let orders = await Order.bulkCreate(req.body);
      result.data = orders;
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
    result.data = await data.orders;
    return res.status(status).send(result);
  }
};
