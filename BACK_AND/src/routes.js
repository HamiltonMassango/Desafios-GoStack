import { Router } from 'express';
const router = new Router();

router.get('/', (rea, req, next) => {
  res.json({ Ok: 'Olá mundo ' });
});

export default router;
