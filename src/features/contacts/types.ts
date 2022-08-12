export interface IContact {
  id: number;
  name: string;
  phone: string;
}

export type IContacts = Array<IContact>;

export interface IContactsStore {
  contacts: Array<IContact>;
}
