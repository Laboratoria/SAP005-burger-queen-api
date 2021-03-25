
const allProduct = (req, res) => {res.send("Request done allproducts")}

const productById = (req, res) => {res.send("Request done productById")}

const addProduct = (req, res) => {res.send("Request done addProduct")}

const updateProduct = (req, res) => {res.send("Request done updateProduct")}

const deleteProduct = (req, res) => {res.send("Request done deleteProduct")}

module.exports = { allProduct,productById,addProduct,updateProduct,deleteProduct }