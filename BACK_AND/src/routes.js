import { Router } from 'express';
const router = new Router();

router.get('/', (req, res, next) => {
  res.json({ Ok: 'Olá mundo ' });
});

export default router;
