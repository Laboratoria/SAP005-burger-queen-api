const orders = [{
    "id":1,
    "name": "Hamburger Simples",
    "flavor": "frango",
    "complement": "queijo",
}];


//Pegar usuários
const getAllOrders = (req, res) => {
res.send(orders)

}
console.log(orders)

//Puxar produtos por id
const getOrderId = (req, res)=> {
let id = Number(req.params.id)
const ftArray = orders.filter(data => data.id === id)
res.status(200).send(ftArray)
}

//Criar Produtos
const orderPost = (req, res) => {
const body = req.body;
console.log(body);
if(!body){
    return res.status(400).end();
} else { 
    orders.push(body);
    return res.status(201).send(body);
}
}
//Alterar produtos
const orderPut = (req, res) => {
console.log("alterado!")
res.send("Alterado")
}

//Deletar Produtos
const orderDelete = (req, res) => {
let id = Number(req.params.id)
const ftArray2 = orders.filter(data => data.id != id)
console.log(ftArray2)
res.status(200).send(ftArray2)
}


module.exports = { getAllOrders, getOrderId , orderPost, orderPut, orderDelete}