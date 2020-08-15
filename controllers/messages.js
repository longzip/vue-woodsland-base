const {
  Message,
  data
} = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateMessage(value) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    orderableId: Joi.string().required(),
    orderableType: Joi.string().required(),
    text: Joi.string().required()
  });
  return schema.validate(value);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let message = await Message.findByPk(req.params.id);
      if (message === null) {
        status = 400;
      } else {
        let affectedRows = await message.destroy();
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
    } = validateMessage(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let message = await Message.create(value, {
        include: []
      });
      result.data = message;
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
      let message = await Message.findByPk(req.params.id);
      if (message == null) {
        status = 400;
      } else {
        result.data = message;
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
    } = validateMessage(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let affectedRows = await Message.update(value, {
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
      let messages = await Message.findAll();
      result.data = messages;
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
      let messages = await Message.bulkCreate(req.body);
      result.data = messages;
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
    result.data = await data.messages;
    return res.status(status).send(result);
  }
};