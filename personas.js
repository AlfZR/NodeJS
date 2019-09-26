const express = require('express');
const app = express();


//majenar peticiones a 127.0.0.1:3000/
app.get("/:nombre/:edad", (req, res) => {
    var obj = {
        nombre: req.params.nombre,
        edad: req.params.edad
    }
    console.log(obj);
    res.send("hola mundoghsfgshfdg");
});

app.listen(5000, () => {
    console.log("server is runnning...");
});
