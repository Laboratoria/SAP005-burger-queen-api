const get = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Get");
};

const getId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request GetId");
};

const post = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Post");
};

const putId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Put");
};

const deleteId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Delete");
};

module.exports = {
    get, getId, putId, post, deleteId,
};
