const modelsDb = require("../db/models");

const getProductsAll = async (req, res) => {
    await modelsDb.Products.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() =>
        res.json({
          message: error.message
        }));
};
  
const getProductsId = async (req, res) => {
    await modelsDb.Products.findAll({ 
        where: { 
            id: req.params.id 
        } })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() =>
        res.json({
          message: error.message
        }));
};
  
const postProducts = async (req, res) => {
    const {
      name, products, price, flavor, complement, image, type, sub_type,
    } = req.body;
    await modelsDb.Products.create({
      name,
      products,
      price,
      flavor,
      complement,
      image,
      type,
      sub_type,
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(() =>
        res.json({
          message: error.message
        }));
};
  
const putProducts = async (req, res) => {
    const {
      name, price, flavor, complement, image, type, sub_type,
    } = req.body;
    await modelsDb.Products.update(
      {
        name,
        price,
        flavor,
        complement,
        image,
        type,
        sub_type,
      },
      { where: { id: req.params.id } },
    )
      .then(() => {
        res.status(200).json({
          message: "Atualizado com sucesso",
        });
      })
      .catch(() => {
        res.json({
          message: error.message
        });
      });
};
  
const deleteProducts = async (req, res) => {
    await modelsDb.Products.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.status(200).json({
          message: 'Deletado!',
        });
      })
      .catch(() => res.status(400).json({
        message: error.message,
      }));
};


module.exports = {
    getProductsAll, 
    getProductsId, 
    postProducts, 
    putProducts, 
    deleteProducts
};