import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected");
    })
    /*^^when mongoDB connection will be established, this function will be executed */

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}

export default connectDB;