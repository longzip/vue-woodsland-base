const {
  OrderMeta,
  data
} = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateOrderMeta(value) {
  const schema = Joi.object({
    id: Joi.string().required(),
    orderId: Joi.string().required(),
    metaKey: Joi.string().required(),
    metaValue: Joi.string().required()
  });
  return schema.validate(value);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let orderMeta = await OrderMeta.findByPk(req.params.id);
      if (orderMeta === null) {
        status = 400;
      } else {
        let affectedRows = await orderMeta.destroy();
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
    } = validateOrderMeta(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let orderMeta = await OrderMeta.create(value, {
        include: []
      });
      result.data = orderMeta;
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
      let orderMeta = await OrderMeta.findByPk(req.params.id);
      if (orderMeta == null) {
        status = 400;
      } else {
        result.data = orderMeta;
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
    } = validateOrderMeta(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let affectedRows = await OrderMeta.update(value, {
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
      let orderMetas = await OrderMeta.findAll();
      result.data = orderMetas;
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
      let orderMetas = await OrderMeta.bulkCreate(req.body);
      result.data = orderMetas;
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
    result.data = await data.OrderMetas;
    return res.status(status).send(result);
  }
};