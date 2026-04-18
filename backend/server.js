require("dotenv/config");
const app = require("./src/app.js");
const mongoDB = require("./src/utility/mongoDB.js");

const port = process.env.PORT || 8000;

app.listen(port, async ()=>{
    try {
        await mongoDB()
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})