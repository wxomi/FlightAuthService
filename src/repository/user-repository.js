const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const existingUser = await User.findOne({
        where: {
          email: data.email,
        },
      });
      if (existingUser) {
        console.log(existingUser);
        throw { error: "User with this email already exists" };
      }
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id", "isVerified"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }

  async verifyEmail(userEmail, data) {
    try {
      const result = await User.update(data, {
        where: {
          email: userEmail,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
