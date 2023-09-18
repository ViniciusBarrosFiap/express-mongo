import app from "../express-mongo/src/app.js";
const PORT = 3000;

//Escuta a porta 3000 (.listen())
app.listen(PORT, ()=>{
    console.log('listening on port 3000')
})