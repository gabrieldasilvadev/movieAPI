import mongoose from "mongoose";

function connectToDatabase() {
  mongoose.connect('mongodb+srv://gabriel:gbr4864265@cluster0.c1od0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
    
  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('📦 Connected to the database!'))
}

export default connectToDatabase;
