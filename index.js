const express = require('express');
const app = express();


//majenar peticiones a 127.0.0.1:3000/
app.get("/", (req, res) => {
    console.log(req);
    res.send("hola mundoghsfgshfdg");
});

app.listen(3000, () => {
    console.log("server is runnning...");
});

