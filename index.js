const express = require('express');
const app = express();
const vals = [];

//majenar peticiones a 127.0.0.1:3000/
app.get("/:id", (req, res) => {
    vals.push(req.params.id);
    console.log(vals);
    res.send("hola mundoghsfgshfdg");
});

app.listen(5000, () => {
    console.log("server is runnning...");
});

