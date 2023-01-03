
import { ContactListStyle, ContactItem, ButtonForDelete } from 'components/ContactList/ContactList.styled';

import { ReactComponent as DeletIcon } from '../Icon/remove-user.svg';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/slice';


export const ContactList = () => { 
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter).toLowerCase();

const doFiltering = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter));
const filteredContacts = doFiltering();

  return (
    <div>
      <ContactListStyle>
        {filteredContacts.map((contact, id) => (
          <ContactItem key={id}>
            {contact.name}: {contact.number}
            <ButtonForDelete
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeletIcon width="32" heigth="32" />
            </ButtonForDelete>
          </ContactItem>
        ))}
      </ContactListStyle>
    </div>
  );
}

