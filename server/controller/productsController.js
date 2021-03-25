const getProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Get Products");
};

const getIdProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request GetId Products");
};

const postProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Post Products");
};

const putIdProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Put Products");
};

const deleteIdProducts = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Delete Products");
};

module.exports = {
    getProducts, getIdProducts, putIdProducts, postProducts, deleteIdProducts,
};
