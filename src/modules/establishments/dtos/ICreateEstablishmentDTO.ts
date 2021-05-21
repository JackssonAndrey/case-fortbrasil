export default interface ICreateEstablishmentDTO {
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
