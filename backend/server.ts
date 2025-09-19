/*import express from 'express';
import cors from 'cors'; //npm install --save-dev @types/cors
import { router } from './routes/userRoutes';
import 'dotenv/config';// 


const app = express();
// CORS configuration
app.use(cors(({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST'],
  credentials: true
})));
// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// API routes
app.use('/api', router);
// Server listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});*/
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';


import { router as userRouter } from './routes/userRoutes';

// Load environment variables only in development
if (process.env.NODE_ENV !== 'production') {
  import('dotenv/config');
}
const app = express();

// Determine if we are in production or development
const isProduction = process.env.NODE_ENV === 'production';
// CORS
// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || (isProduction ? '*' : 'http://localhost:5173'),
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', userRouter);

// Serve React frontend
// If CommonJS, you can use __dirname directly
if (isProduction) {
  const frontendPath = path.join(process.cwd(), 'frontend', 'dist');
  app.use(express.static(frontendPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}
// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running in ${isProduction ? 'production' : 'development'} mode on port ${PORT}`);
});

