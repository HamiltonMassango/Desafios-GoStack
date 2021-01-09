import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';
import studentControllers from './app/controllers/StudentsControllers';

const router = new Router();

router.post('/sessions', sessionControllers.store);

router.post('/student', studentControllers.store);

export default router;
