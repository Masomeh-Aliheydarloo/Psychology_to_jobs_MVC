import express from 'express';
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
});