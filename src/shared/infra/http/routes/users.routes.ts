import ChangePasswordController from '@modules/accounts/useCases/changePassword/ChangePasswordUseCase';
import CreateUserController from '@modules/accounts/useCases/createUser/CreateUserController';
import DeactivateUserController from '@modules/accounts/useCases/deactivateUser/DeactivateUserController';
import ProfileUserController from '@modules/accounts/useCases/profileUser/ProfileUserController';
import UpdateUserController from '@modules/accounts/useCases/updateUser/UpdateUserController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const profileUserController = new ProfileUserController();
const updateUserController = new UpdateUserController();
const deactivateUserController = new DeactivateUserController();
const changePasswordController = new ChangePasswordController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', ensureAuthenticated, profileUserController.handle);
usersRoutes.put('/', ensureAuthenticated, updateUserController.handle);
usersRoutes.put('/deactivate', ensureAuthenticated, deactivateUserController.handle);
usersRoutes.put('/password', ensureAuthenticated, changePasswordController.handle);

export default usersRoutes;
