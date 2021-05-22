import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO';

export default interface ICreateEstablishmentDTO extends ICreateAddressDTO {
  id?: string;
  address?: string;
  user?: string;
  companyName: string;
  fantasyName: string;
  branch: string;
  cnpj: string;
  stateRegistration?: string;
  municipalRegistration?: string;
  phone?: string;
  mail?: string;
}
