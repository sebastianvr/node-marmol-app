const mongoose = require('mongoose');

const dbConection =async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Bases de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Ha ocurrido un error al iniciar BD');
        
    }
}

module.exports={
    dbConection
}