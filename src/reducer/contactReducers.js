const initialState = { contacts: [] }


export default function (state = initialState, action) {
    switch ( action.type) {
        case 'ADD_ALL_CONTACTS':
            let contacts = action.payload;
            return{contacts : contacts};

            default :
            return state;
    }
};