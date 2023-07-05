const wineCountReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CELLAR_COUNT':
            return action.payload[0];
        default:
            return state;
    }
}

export default wineCountReducer;