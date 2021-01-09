import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';

const router = new Router();

router.post('/sessions', sessionControllers.store);

export default router;
