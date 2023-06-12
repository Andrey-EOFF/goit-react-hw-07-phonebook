import * as contactsActions from './contactsActions';

import * as contactsApi from '../../contactsApi';

export const fetchContactsAll = () => async dispatch => {
  dispatch(contactsActions.fetchContactsReauest());

  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
