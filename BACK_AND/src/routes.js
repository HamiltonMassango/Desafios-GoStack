import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';
import studentControllers from './app/controllers/StudentsControllers';
import auth from './app/middlewares/auth';

const router = new Router();

router.post('/sessions', sessionControllers.store);
router.use(auth);
router.get('/students', studentControllers.index);
router.post('/students', studentControllers.store);

export default router;
