const express  = require("express")
const router = require("./routes")
const cors = require('cors'); 


app = express()
const port = 3000
app.use(cors());

router(app)

app.listen(port, () => console.log(`O servidor está ativo na porta ${port}`))

module.exports = app