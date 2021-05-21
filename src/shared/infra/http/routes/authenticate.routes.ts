import { Router } from 'express';

import { AuthenticateController } from '@modules/accounts/useCases/authenticateUser/AuthenticateController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateController();

authenticateRoutes.post('/auth', authenticateUserController.handle);

export default authenticateRoutes;
