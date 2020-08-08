const { Costcenter, data } = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateUser(costcenter) {
  const schema = Joi.object({
    id: Joi.string().required(),
    code: Joi.string().required(),
    name: Joi.string().required(),
    companyId: Joi.string().required(),
    userId: Joi.string().required()
  });
  return schema.validate(costcenter);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let costcenter = await Costcenter.findByPk(req.params.id);
      if (costcenter === null) {
        status = 400;
      } else {
        let affectedRows = await costcenter.destroy();
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
      let costcenter = await Costcenter.create(value, {
        include: []
      });
      result.data = costcenter;
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
      let costcenter = await Costcenter.findByPk(req.params.id);
      if (costcenter == null) {
        status = 400;
      } else {
        result.data = costcenter;
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
      let affectedRows = await Costcenter.update(value, {
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
      let costcenters = await Costcenter.findAll();
      result.data = costcenters;
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
      let costcenters = await Costcenter.bulkCreate(req.body);
      result.data = costcenters;
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
    result.data = await data.costcenters;
    return res.status(status).send(result);
  }
};
