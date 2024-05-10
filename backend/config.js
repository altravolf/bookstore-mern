const PORT = process.env.PORT || 3006;

const mongoUser = process.env.MONGO_USER || "altravolf";
const mongoPass = process.env.MONGO_PASS || "k39a2C5s3cg6duef";

const mongoURI = "mongodb+srv://altravolf:k39a2C5s3cg6duef@bookstore.lkcv9sx.mongodb.net/bookstore?retryWrites=true&w=majority&appName=bookstore"

export { PORT, mongoURI }