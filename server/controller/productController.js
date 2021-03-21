
const bancoDadosProduto = [
  {
    "id":1,
    "name": "Hamburger Simples",
    "flavor": "carne",
    "complement": "queijo",
  },
  {
    "id":2,
    "name": "Hamburger Simples",
    "flavor": "frango",
    "complement": "queijo",
  },
  {
    "id":3,
    "name": "Hamburger Simples",
    "flavor": "vegetariano",
    "complement": "queijo",
  }
]


//Pegar todos os usuários ---------------------- ok
const getAllProducts = (req, res) => {
  res.send(bancoDadosProduto)
  
}
console.log(bancoDadosProduto)

//Pegar produto por ID -------------------ok
const getProductId = (req, res)=> {
  let id = Number(req.params.id)
  const arrayFiltered = bancoDadosProduto.filter(data => data.id === id)
  res.status(200).send(arrayFiltered)
}

//Criar Produto ---------------------- ok
const postProduct = (req, res) => {
  const body = req.body;
  console.log(body);
  if(!body){
    return res.status(400).end();
  } else { 
    bancoDadosProduto.push(body);
    return res.status(201).send(body);
  }
}
//Criar Produto
const updateProduct = (req, res) => {
  console.log("alterar user ok")
  res.send("alterar user ok")
}

//Deletar Produto ---------------------- ok
const deleteProducts = (req, res) => {
  let id = Number(req.params.id)
  const arrayFiltered1 = bancoDadosProduto.filter(data => data.id != id)
  console.log(arrayFiltered1)
  res.status(200).send(arrayFiltered1)
}


module.exports = { getAllProducts, postProduct, deleteProducts, getProductId, updateProduct}