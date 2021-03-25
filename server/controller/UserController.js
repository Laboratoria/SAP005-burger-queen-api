
const allUsers = (req, res) => {res.send("Request done allUser")}

const userById = (req, res) => {res.send("Request done userById")}

const addUser = (req, res) => {res.send("Request done addUser")}

const updateUser = (req, res) => {res.send("Request done updateUser")}

const deleteUser = (req, res) => {res.send("Request done deleteUser")}

module.exports = { allUsers,userById,addUser,updateUser,deleteUser }