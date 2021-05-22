import { Router } from 'express';
import addressRoutes from './address.routes';
import authenticateRoutes from './authenticate.routes';
import establishmentRoutes from './establishments.routes';
import usersRoutes from './users.routes';

const router = Router();

router.use(authenticateRoutes);
router.use('/users', usersRoutes);
router.use('/establishments', establishmentRoutes);
router.use('/address', addressRoutes);

export default router;
