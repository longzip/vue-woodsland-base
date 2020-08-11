const { Unit, data } = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateUnit(value) {
  const schema = Joi.object({
    id: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required()
  });
  return schema.validate(value);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let unit = await Unit.findByPk(req.params.id);
      if (unit === null) {
        status = 400;
      } else {
        let affectedRows = await Unit.destroy();
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

    let { error, value } = validateUnit(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let unit = await Unit.create(value, {
        include: []
      });
      result.data = unit;
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
      let unit = await Unit.findByPk(req.params.id);
      if (unit == null) {
        status = 400;
      } else {
        result.data = unit;
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

    let { error, value } = validateUnit(req.body);
    if (error) {
      status = 500;
      console.log(error);
      result.error = error;
      return res.status(status).send(result);
    }

    try {
      let affectedRows = await Unit.update(value, {
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
      let units = await Unit.findAll();
      result.data = units;
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
      let units = await Unit.bulkCreate(req.body);
      result.data = units;
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
    result.data = await data.units;
    return res.status(status).send(result);
  }
};
