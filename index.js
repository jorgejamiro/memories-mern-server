import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// every route inside of 'postRoutes' is gonna begin with the prefix '/posts'
// important!!: alawys has to be positioned below the 'app.use(cors())' statement
app.use('/posts', postRoutes);  
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('APP IS RUNNING.');
});

// Connect to a database (MongoDB Atlas cloud)
const PORT = process.env.PORT || 5000;  // Heroku'll got an enviromental variable called PORT

// the following configurations make the console doesn't throw several warnings and errors
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);








