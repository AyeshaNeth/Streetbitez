const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection failed', err));

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'Naduka0916',
    resave: false,
    saveUninitialized: false,
  })
);

// Configure CORS to allow requests from specific origins
const corsOptions = {
  origin: 'http://localhost:5173', // Change this to match your React app's origin
  credentials: true, // Allow cookies and other credentials to be included in the request
};

app.use(cors(corsOptions));

app.use('/', require('./routes/authRoutes'));
app.use('/inventory', require('./routes/invRoutes'));

// driverRoutes
const driverRoutes = require('./routes/driverRoutes')
app.use('/drivers', driverRoutes)

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
