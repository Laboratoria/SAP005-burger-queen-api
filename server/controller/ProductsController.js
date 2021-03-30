// aqui vai o código que acessa o banco de dados
const Products = require("../db/models/ProductsModels")
 
const getAllProducts = async (req, res) => {
   const products = await Products.findAll()
   res.status(200).send(products)
}
const postProducts = async (req, res) =>{
   const {name,flavor,complement,image,type,sub_type,price}= req.body
   const post = await Products.create({name,flavor,complement,image,type,sub_type,price})
   res.status(200).send(post)
  
}
const getProductsUid = async (req, res) =>{
   const id = req.params
   const products = await Products.findOne({
      where:id,
   });
   res.status(200).send(products)
}

const putProducts = async (req, res) =>{
   const{name,flavor,complement,image,type,sub_type,price}= req.body
   const id = req.params
   const products = await Products.update({name,flavor,complement,image,type,sub_type,price},{
      where:id
   });
   res.status(200).send(products)
}

const deleteProducts = async (req, res) => {
   const id = req.params
   await Products.destroy({
      where:id
   });
   res.status(200).send("Produto deletado com sucesso")
}


module.exports = {getAllProducts,postProducts,getProductsUid,putProducts,deleteProducts}