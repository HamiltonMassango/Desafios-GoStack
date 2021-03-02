import { Router } from 'express';

import sessionControllers from './app/controllers/SessionControllers';
import studentControllers from './app/controllers/StudentsControllers';
import PlanoControllers from './app/controllers/PlanosControllers';
import MatriculaControllers from './app/controllers/MatriculasControllers';

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
router.post('/matricula', MatriculaControllers.store);
router.get('/matricula', MatriculaControllers.index);
router.put('/matricula/:id', MatriculaControllers.update);
router.delete('/matricula/:id', MatriculaControllers.delete);

export default router;
