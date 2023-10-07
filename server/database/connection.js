const mongoose = require('mongoose');
const connectDB = async () => {
            try{
                await mongoose.connect("mongodb+srv://admin:admin123@devtaminapi.lzx29ep.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
                const connection = mongoose.connection;
                connection.once('open', () => {
                    console.log("MongoDB database connection established successfully");
                });
                console.log(`MongoDB connected : ${connection.host}`);
            }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;