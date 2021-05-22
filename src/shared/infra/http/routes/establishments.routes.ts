import CreateEstablishmentController from '@modules/establishments/useCases/createEstablishment/CreateEstablishmentController';
import DeactivateEstablishmentController from '@modules/establishments/useCases/deactivateEstablishment/DeactivateEstablishmentController';
import DetailsEstablishmentController from '@modules/establishments/useCases/detailsEstablishment/DetailsEstablishmentController';
import GetAllEstablishmentsController from '@modules/establishments/useCases/getAllEstablishments/GetAllEstablishmentsController';
import UpdateEstablishmentController from '@modules/establishments/useCases/updateEstablishment/UpdateEstablishmentController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const establishmentRoutes = Router();
const createEstablishmentController = new CreateEstablishmentController();
const deactivateEstablishmentController = new DeactivateEstablishmentController();
const detailsEstablishmentController = new DetailsEstablishmentController();
const getAllEstablishmentsController = new GetAllEstablishmentsController();
const updateEstablishmentUseCase = new UpdateEstablishmentController();

establishmentRoutes.post('/', ensureAuthenticated, createEstablishmentController.handle);
establishmentRoutes.put('/deactivate/:id', ensureAuthenticated, deactivateEstablishmentController.handle);
establishmentRoutes.get('/:id', ensureAuthenticated, detailsEstablishmentController.handle);
establishmentRoutes.get('/', ensureAuthenticated, getAllEstablishmentsController.handle);
establishmentRoutes.put('/', ensureAuthenticated, updateEstablishmentUseCase.handle);

export default establishmentRoutes;
