export function getAllContactAction() {
    return (dispatch, state, { getFirestore }) => {
      const db = getFirestore();
      db.collection('contacts').onSnapshot(
        (results) => {
          let contacts = [];
          results.forEach((doc) => {
           
            let contact = doc.data();
            contact.id = doc.id;
            contacts.push(contact);
  
            
          });
  
          dispatch({
            type: 'ADD_ALL_CONTACTS',
            payload: contacts,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    };
  }
  
  export function addContactAction(contact) {
    return async (dispatch, state, { getFirestore }) => {
      const db = getFirestore();
      try {
        await db.collection('contacts').add(contact);
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function deleteContactAction(id) {
    return async (dispatch, state, { getFirestore }) => {
      let db = getFirestore();
      try {
        await db.collection('contacts').doc(id).delete();
      } catch (err) {
        console.log(err);
      }
    };
  }
  
  export function updateContactAction(id, updatedUser) {
    return async (dispatch, state, { getFirestore }) => {
      let db = getFirestore();
      try {
        await db.collection('contacts').doc(id).update(updatedUser);
      } catch (err) {
        console.log(err);
      }
    };
  }