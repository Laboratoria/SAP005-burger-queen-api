const products = [
    {
      "id":1,
      "name": "Hamburger Simples",
      "flavor": "carne",
      "complement": "queijo", 
    },
      {
     "id": 2,
        "name": "Hambúrguer simples",
        "price": 10,
        "flavor": "carne",
        "complement": null,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "type": "all-day",
        "sub_type": "hamburguer",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "updatedAt": "2021-02-16T13:11:54.173Z"
    }

  ]
  
  
  const getAllProducts = (req, res) => {
    res.send(products)
    
  }
  console.log(products)

  //Pegar por id
const getProductId = (req, res)=> {
  let id = Number(req.params.id)
  const ftArray = products.filter(data => data.id === id)
  res.status(200).send(ftArray)
}
  
//Criar Produtos
const ProductPost = (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else { 
    products.push(body);
    return res.status(201).send(body);
  }
}
//Alterar Produto
const ProductPut = (req, res) => {
  console.log("alterar user ok")
  res.send("alterar user ok")
}

//Deletar Produtos
const productsDelete = (req, res) => {
  let id = Number(req.params.id)
  const ftFilter2 = products.filter(data => data.id != id)
  console.log(ftFilter2)
  res.status(200).send(ftFilter2)
}


module.exports = { getAllProducts, getProductId, ProductPost, ProductPut, productsDelete }