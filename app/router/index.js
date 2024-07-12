import express from 'express';
import { customError, notFound } from '../middleware/errorHandler.js';
import fundTransferRouter from './fundTransferRoute.js';
import payInRouter from './payInRoute.js';

const router = express();

router.use('/v1',fundTransferRouter)
router.use('/v1',payInRouter)







// Middleware for handling 404 errors
router.use(notFound);  
// Register the custom error handling middleware after all routes
router.use(customError);

export default router;