const {
  Order,
  OrderMeta,
  Request,
  Message,
  data
} = require("wms-sequelize");
const Joi = require("@hapi/joi");
const {
  v4: uuidv4
} = require("uuid");

function validateUser(order) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    costcenterId: Joi.string().required(),
    costcenterName: Joi.string().required(),
    approvalId: Joi.string().required(),
    companyId: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required(),
    note: Joi.string().required(),
    status: Joi.string().required(),
    signature: Joi.string().required(),
    completed: Joi.boolean().required()
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
      let order = await Order.create({
        ...value,
        OrderMeta: [{
          id: uuidv4(),
          metaKey: value.code,
          metaValue: JSON.stringify([])
        }]
      }, {
        include: [OrderMeta]
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
    let {
      id
    } = req.params;
    let result = {};
    let status = 200;

    try {
      let order = await Order.findOne({
        where: {
          id
        },
        include: [OrderMeta, Request, Message]
      });
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
      let order = await Order.findByPk(req.params.id);
      if (order == null) {
        status = 400;
      } else {
        order.userId = value.userId;
        order.costcenterId = value.costcenterId;
        order.companyId = value.companyId;
        order.code = value.code;
        order.name = value.name;
        order.completed = value.completed;
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
    let {
      userId
    } = req.query;
    // console.log(userId)
    try {
      let orders = await Order.findAll({
        where: {
          userId
        }
      });
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