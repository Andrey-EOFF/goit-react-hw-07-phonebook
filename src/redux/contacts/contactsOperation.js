import * as contactsActions from './contactsAction';
import * as contactsApiAll from 'api/contactsApi';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

    try {
      
    const contacts = await contactsApiAll.fetchContactsAPI();
        dispatch(contactsActions.fetchContactsSuccess(contacts));
        
    } catch (error) {
        dispatch(contactsActions.fetchContactsError());
  }
};
