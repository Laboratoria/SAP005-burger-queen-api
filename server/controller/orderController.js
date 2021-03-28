
const bancoDadosOrder = [{
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
    ];


//Pegar todos os usuários ---------------------- ok
const getAllOrders = (req, res) => {
res.send(bancoDadosOrder)

}
console.log(bancoDadosOrder)

//Pegar produto por ID -------------------ok
const getOrderId = (req, res)=> {
let id = Number(req.params.id)
const arrayFiltered = bancoDadosOrder.filter(data => data.id === id)
res.status(200).send(arrayFiltered)
}

//Criar Produto ---------------------- ok
const postOrder = (req, res) => {
const body = req.body;
console.log(body);
if(!body){
    return res.status(400).end();
} else { 
    bancoDadosOrder.push(body);
    return res.status(201).send(body);
}
}
//Criar Produto
const updateOrder = (req, res) => {
console.log("alterar user ok")
res.send("alterar user ok")
}

//Deletar Produto ---------------------- ok
const deleteOrder = (req, res) => {
let id = Number(req.params.id)
const arrayFiltered1 = bancoDadosOrder.filter(data => data.id != id)
console.log(arrayFiltered1)
res.status(200).send(arrayFiltered1)
}


module.exports = { getAllOrders, postOrder, deleteOrder, getOrderId, updateOrder}