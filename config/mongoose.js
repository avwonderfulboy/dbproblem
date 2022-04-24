

const mongoose = require('mongoose')

const url = "mongodb+srv://codeial_delovpment:codeial123@cluster0.6qqeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

module.exports= db = ()=>{
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
}
