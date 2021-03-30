// aqui vai o código que acessa o banco de dados

const Users = require("../db/models/UsersModels")

const getAllUsers = async (req, res) => {
   const users = await Users.findAll()
  res.status(200).send(users)
}
const postUsers = async (req, res) => {
   const {name,email,password,role,restaurant}= req.body
   const users = await Users.create({name,email,password,role,restaurant})
   res.status(200).send(users)
 }

 const getUserUid = async (req, res) => {
    const id = req.params
    const users = await Users.findOne({
      where: id,
    });
    res.status(200).send(users)
 }
const putUsers = async (req, res) => {
  const {name,email,password,role,restaurant}= req.body
  const id = req.params
  const users = await Users.update({name,email,password,role,restaurant}, {
    where: id
  });
  res.status(200).send(users)
}

 const deleteUsers = async (req, res) => {
   const id = req.params
   await Users.destroy({
    where:id   
  });
  res.status(200).send("usuario deletado com sucesso")
 }

module.exports = { getAllUsers,postUsers,getUserUid,putUsers,deleteUsers}