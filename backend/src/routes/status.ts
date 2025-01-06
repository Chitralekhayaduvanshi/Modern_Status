import { Router } from 'express';
import { statusController } from '../controllers/status.controller';

const router = Router();

router.get('/', statusController.getAll);
router.post('/', statusController.create);
router.put('/:id', statusController.update);
router.delete('/:id', statusController.delete);

export const statusRoutes = router; 