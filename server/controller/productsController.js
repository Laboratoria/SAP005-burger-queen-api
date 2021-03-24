const get = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Get Products");
};

const getId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request GetId Products");
};

const post = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Post Products");
};

const putId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Put Products");
};

const deleteId = (req, res) => {
    console.log("você também pode utilizar o console para visualizar =)");
    res.send("Request Delete Products");
};

module.exports = {
    get, getId, putId, post, deleteId,
};
