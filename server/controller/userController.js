// aqui vai o código que acessa o banco de dados

const { response } = require("express");
const { restart } = require("nodemon");
const { resolve } = require("path");
const { nextTick } = require("process");
const models = require('../db/models')

const getAllUsers = async (req, res, next) => {
  try {
    const users = await models.User.findAll();
    res.status(200).json(users);
  } catch (err){
    next(err)
  }
}

const getUserId = async (req, res, next) => {
  try {
    const users = await models.User.findAll({
      where: 
      {id:req.params.id}
    })
    res.status(200).json(users);
    } catch (err){
      next(err);
    }
}
//tratar e-mails repetidos
const postUser = async (req, res, next) => {
  try {
    const { name, email, password, role, restaurant } = req.body;
    const user = await models.User.create({
      name,
      email,
      password,
      role,
      restaurant,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    res.status(200).json(user);
  } catch(err){
    next(err);
  }
}

const updateUser = async (req, res, next) => {
  try {
    const {id, name, email, password, role, restaurant } = req.body;
    const users = await models.User.update(
      { 
        id,
        name, 
        email, 
        password, 
        role, 
        restaurant 
      },
      {
        where:
        { id: req.params.id }
      } 
    )
    return res.json(users);
  } catch(err) {
    next(err);
  }
}

const deleteUsers = async (req, res, next) => {
  try {
    const users = await models.User.destroy({
      where: 
      {id:req.params.id}
    });
    return res.json(users);
  } catch(err) {
    next(err);
  }
}

module.exports = { getAllUsers, postUser, deleteUsers, getUserId, updateUser}