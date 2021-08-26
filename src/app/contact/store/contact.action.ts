import { Action } from "@ngrx/store";
import { contactData } from "../contact.model";

export interface ContactState {
  contact_data: contactData[];
}

export const ADD_CONTACT = 'ADD_CONTACT';

export class AddContact implements Action{
  readonly type = ADD_CONTACT;
  constructor(public payload: any) { }
}
