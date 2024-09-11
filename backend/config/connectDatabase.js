const mongoose = require('mongoose');

const connectDatabase = () =>{
    return (
        mongoose.connect(process.env.DB_URL).then((con)=>{
            console.log("Mongoose Connect to Host:"+con.connection.host)
        })
    )
}

module.exports = connectDatabase;