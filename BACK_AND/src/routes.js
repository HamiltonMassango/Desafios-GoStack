import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';
import studentControllers from './app/controllers/StudentsControllers';
import PlanoControllers from './app/controllers/PlanosControllers';

import auth from './app/middlewares/auth';

const router = new Router();

router.post('/sessions', sessionControllers.store);
router.use(auth);
router.get('/students', studentControllers.index);
router.post('/students', studentControllers.store);
router.post('/planos', PlanoControllers.store);
router.get('/planos', PlanoControllers.index);
router.put('/planos/:id', PlanoControllers.update);
router.delete('/planos/:id', PlanoControllers.delete);
export default router;
