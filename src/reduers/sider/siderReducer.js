const initialState = {
    fold: false
}

const siderReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SIDER_ACTION_CHANGE': {
            return {
                ...state,
                fold: !state.fold
            };
        }
    }
    return state;
}

export default siderReducer
