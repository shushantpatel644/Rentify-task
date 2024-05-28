import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import propertyRoutes from './routes/propertyRoutes';

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

export default app;
