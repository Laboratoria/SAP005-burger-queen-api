const sequelize = require("./index")
const {DataTypes} = require("sequelize")

const Products = sequelize.define("Products",{  
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING
})
async function init(){
    await Products.sync();
}
//init()
 
module.exports = Products