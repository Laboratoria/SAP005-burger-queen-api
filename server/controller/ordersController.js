const get = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Get Orders");
};

const getId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request GetId Orders");
};

const post = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Post Orders");
};

const putId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Put Orders");
};

const deleteId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Delete Orders");
};

module.exports = {
    get, getId, putId, post, deleteId,
};


