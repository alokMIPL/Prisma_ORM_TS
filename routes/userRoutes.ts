import { Router } from 'express';
import { createUser } from '../Controller/UserController.js';

const router = Router();

// POST route
router.post("/", createUser);

export default router;