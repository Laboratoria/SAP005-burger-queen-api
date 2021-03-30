const sequelize = require("./index")
const {DataTypes} = require("sequelize")

const Users = sequelize.define("Users",{
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    role:DataTypes.STRING,
    restaurant:DataTypes.STRING,
})
async function init(){
    await Users.sync();
}
// init()
 
module.exports = Users
