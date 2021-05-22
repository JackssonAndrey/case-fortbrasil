import { Router } from 'express';
import authenticateRoutes from './authenticate.routes';
import establishmentRoutes from './establishments.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/users', usersRoutes);
router.use('/establishments', establishmentRoutes);

export default router;
