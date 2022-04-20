const express = require("express");
const app =express( )


app.use(express.static('public'));

app.listen(82,
    ()=> console.log("server listening on port 82")
);