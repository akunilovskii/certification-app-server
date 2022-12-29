const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const tokenService = require('./tokenService');
const UserDto = require('../dtos/userDto');
const Role = require('../models/roleModel');
const ApiError = require('../exceptions/apiError');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });

    if (candidate) {
      throw ApiError.BadRequest(`User with login ${email} already exist.`);
    }

    const hashPassword = await bcrypt.hash(password, 3);

    const userRole = await Role.findOne({ value: 'USER' }); //choose role USER for created user

    if (!userRole) await Role.create([{ value: 'USER' }, { value: 'ADMIN' }]);

    const user = await UserModel.create({
      email,
      password: hashPassword,
      roles: [userRole?.value || 'USER'],
    });

    const userDto = new UserDto(user); //change user DTO
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest(`User with login ${email} not found`);
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Password is incorrect');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      !userData ? console.log('no user data') : console.log('no tokenFromDB');
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }
}

module.exports = new UserService();
