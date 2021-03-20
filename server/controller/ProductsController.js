const products = [
    {
      "id":1,
      "name": "Hamburger Simples",
      "flavor": "carne",
      "complement": "queijo",
    },

  ]
  
  const getAllProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)")
    res.send(products)
  }
  
  module.exports = { getAllProducts }