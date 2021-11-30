import { combineReducers } from 'redux'
import siderReducer from './sider/siderReducer'
import themeReducer from './theme/themeReducer'

const appReducer = combineReducers({
    sider: siderReducer,
    theme: themeReducer,
});

export default appReducer;
