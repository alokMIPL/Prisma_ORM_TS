import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js'; // Add this back

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use your routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`✅ Server: http://localhost:3000`);
  console.log(`👤 User API: http://localhost:3000/api/user`);
  console.log(`📝 Test: http://localhost:3000/api/test-direct`);
});