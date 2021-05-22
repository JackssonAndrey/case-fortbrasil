import CreateAddressController from '@modules/addresses/useCases/createAddress/CreateAddressController';
import DetailsAddressController from '@modules/addresses/useCases/detailsAddress/DetailsAddressController';
import FindAddressByLocationController from '@modules/addresses/useCases/findAddressByLocation/FindAddressByLocationController';
import UpdateAddressController from '@modules/addresses/useCases/updateAddress/UpdateAddressController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const addressRoutes = Router();
const createAddressController = new CreateAddressController();
const updateAddressController = new UpdateAddressController();
const detailsAddressController = new DetailsAddressController();
const findAddressByLocationController = new FindAddressByLocationController();

addressRoutes.post('/', ensureAuthenticated, createAddressController.handle);
addressRoutes.put('/', ensureAuthenticated, updateAddressController.handle);
addressRoutes.get('/:id', ensureAuthenticated, detailsAddressController.handle);
addressRoutes.get('/get/location/', ensureAuthenticated, findAddressByLocationController.handle);

export default addressRoutes;
