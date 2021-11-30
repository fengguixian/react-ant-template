const initialState = {
    theme: 'light'
}

const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'THEME_ACTION_CHANGE': {
            return {
                ...state,
                theme: state.theme==='light' ? 'dark' : 'light'
            };
        }
    }
    return state;
}

export default themeReducer