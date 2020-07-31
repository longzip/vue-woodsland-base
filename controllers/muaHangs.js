const { MuaHang, MuaHangCT } = require("wms-sequelize");
const Joi = require("@hapi/joi");

function validateUser(muaHang) {
  const schema = {
    id: Joi.string(),
    soPhieu: Joi.string(),
    noiDung: Joi.string(),
    trangThai: Joi.string(),
    MuaHangCTs: Joi.array()
  };
  return Joi.validate(muaHang, schema);
}

module.exports = {
  delete: (req, res) => {
    let result = {};
    let status = 200;

    MuaHang.findByPk(req.params.id)
      .then(item => {
        result.status = status;
        result.result = item.destroy();
        return res.status(status).send(result);
      })
      .catch(err => {
        status = 500;
        result.status = status;
        result.error = err;
        return res.status(status).send(result);
      });
  },

  add: (req, res) => {
    let result = {};
    let status = 201;

    let { error, value } = validateUser(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }

    MuaHang.create(value, {
      include: [MuaHangCT]
    })
      .then(user => {
        result.status = status;
        result.result = user;
        return res.status(status).send(result);
      })
      .catch(err => {
        status = 500;
        result.status = status;
        result.error = err;
        return res.status(status).send(result);
      });
  },

  show: (req, res) => {
    let result = {};
    let status = 200;

    MuaHang.findByPk(req.params.id)
      .then(uom => {
        result.status = status;
        result.result = uom;
        return res.status(status).send(result);
      })
      .catch(err => {
        status = 500;
        result.status = status;
        result.error = err;
        return res.status(status).send(result);
      });
  },

  update: (req, res) => {
    let result = {};
    let status = 201;

    let { error, value } = validateUser(req.body);
    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }
    MuaHang.update(value, {
      where: {
        id: req.params.id
      }
    })
      .then(affectedRows => {
        result.status = status;
        result.result = affectedRows;
        return res.status(status).send(result);
      })
      .catch(err => {
        status = 500;
        result.status = status;
        result.error = err;
        return res.status(status).send(result);
      });
  },

  getAll: (req, res) => {
    let result = {};
    let status = 200;

    MuaHang.findAll({ raw: false, include: { model: MuaHangCT } })
      .then(users => {
        result.status = status;
        result.result = users;
        return res.status(status).send(result);
      })
      .catch(err => {
        status = 500;
        result.status = status;
        result.error = err;
        return res.status(status).send(result);
      });
  }
};
