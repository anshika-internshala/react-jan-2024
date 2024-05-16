import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new Schema( {
    name: String,
    avgRating: Number,
    cuisines: String,
    deliveryTime: String,
    imageUrl: String,
    location: String
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

export default restaurantModel;
