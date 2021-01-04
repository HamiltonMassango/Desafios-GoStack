import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';

const router = new Router();

router.get('/', sessionControllers.index);

export default router;
