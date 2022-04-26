const INITIAL_STATE = {
    inventaire: []
}

function GetInventaryReducer(state = INITIAL_STATE, action) {

    switch(action.type){
        case 'INV': {
            return {
                ...state,
                inventaire: action.payload
            }
        }
    }

    return state;
}

export default GetInventaryReducer;