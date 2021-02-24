const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const sequelize = require('./configs/database');
const initModels = require('./models/init-models');
const PORT = process.env.PORT || 8080;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/auto', require('./routes/auto_router'))

async function initDatabase(){
    try{
        await sequelize.authenticate();
        global.models = initModels(sequelize)  //global para que es
        console.log("Database connected")
    }catch(error){
        console.log(error)
    }
}

app.listen(PORT, () => {
    console.log(`service is up on ${PORT}`);
    initDatabase();
});