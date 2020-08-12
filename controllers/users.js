const { User } = require("wms-sequelize");
const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const stage = 10;

function validateUser(user) {
  const schema = Joi.object({
    id: Joi.string().required(),
    userId: Joi.string().required(),
    costcenterId: Joi.string().required(),
    name: Joi.string(),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    role: Joi.string().required(),
    avatar: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2 })
  });
  return schema.validate(user);
}

function validateLogin(user) {
  const schema = Joi.object({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{1,30}$/)
      .required()
  });
  return schema.validate(user);
}

module.exports = {
  delete: async (req, res) => {
    let result = {};
    let status = 200;

    try {
      let user = await User.findByPk(req.params.id);
      if (user === null) {
        status = 400;
      } else {
        let affectedRows = await user.destroy();
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
      const hash = bcrypt.hashSync(value.password, stage);
      value.password = hash;
      let user = await User.create(value);
      result.data = user;
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
      let user = await User.findByPk(req.params.id);
      if (user == null) {
        status = 400;
      } else {
        result.data = user;
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
    console.log(id);
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
      let user = await User.findByPk(id);
      if (user === null) {
        status = 400;
      } else {
        user.userId = value.userId;
        user.costcenterId = value.costcenterId;
        user.name = value.name;
        user.username = value.username;
        user.role = value.role;
        user.avatar = value.avatar;
        user.email = value.email;
        if (value.password) {
          console.log("Doi mat khau");
          user.password = bcrypt.hashSync(value.password, stage);
        }
      }
      let affectedRows = await user.save();
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
      let users = await User.findAll({
        attributes: { exclude: ["password"] }
      });
      result.data = users;
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }
    return res.status(status).send(result);
  },

  login: async (req, res) => {
    let result = {};
    let status = 200;

    let { error, value } = validateLogin(req.body);

    if (error) {
      status = 500;
      result.status = status;
      result.error = error;
      return res.status(status).send(result);
    }
    const { username, password } = value;
    console.log(password);

    try {
      let user = await User.findOne({ raw: true, where: { username } });
      if (user == null) {
        status = 400;
      } else {
        let match = bcrypt.compareSync(password, user.password);
        if (match) {
          const payload = { user: user.name };
          const options = {
            expiresIn: "2d",
            issuer: "https://woodsland.com.vn"
          };
          const secret = "sdkfjksdjkfjkjfsiojfksdjkfsd";

          const token = await jwt.sign(payload, secret, options);

          result.token = token;
        } else {
          status = 401;
          result.status = status;
          result.error = `Authentication error`;
        }
      }
    } catch (error) {
      console.log(error);
      status = 500;
      result.error = error;
    }
    return res.status(status).send(result);
  }
};
