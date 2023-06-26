

const myWineReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_WINE':
            return action.payload;
        default:
            return state;
    }
}

export default myWineReducer;