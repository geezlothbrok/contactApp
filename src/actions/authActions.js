export function signup(email, password) {
    return async (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      try {
        const contact = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
  
        console.log(contact);
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function login(email, password) {
    return async (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      try {
        const contactCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log(contactCredential);
      } catch (e) {
        console.log(e);
      }
    };
  }
  
  export function logout() {
    return async (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      try {
        await firebase.auth().signOut();
      } catch (e) {
        console.log(e);
      }
    };
  }