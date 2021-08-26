import { Action } from "@ngrx/store";
import { contactData } from "../contact.model";
import * as  ContactAction from "./contact.action"


export interface ContactState {
  contact_data: contactData[];
}


export const initialState: ContactState = {
  contact_data: []
};


export function contactReducer(state = initialState, action: ContactAction.AddContact) {

  switch(action.type){
    case ContactAction.ADD_CONTACT:
      return {
        ...state,
        contact_data: [...state.contact_data, action.payload]
  }
}
}
