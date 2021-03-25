const getOrders = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Get Orders");
};

const getIdOrders = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request GetId Orders");
};

const postOrders = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Post Orders");
};

const putIdOrders = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Put Orders");
};

const deleteIdOrders = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Delete Orders");
};

module.exports = {
    getOrders, getIdOrders, putIdOrders, postOrders, deleteIdOrders,
};


