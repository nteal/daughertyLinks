import * as tabsActions from '../actions/tabs.action'

const defaultState = {
    selectedTab: "Daugherty"
};

const tabsReducer = (state = defaultState, action) => {
    switch (action.type){
        case tabsActions.TAB_HAS_CHANGED:{
            console.log('Selected Tab Changed: ', action.payload);
            state = {...state, selectedTab: action.payload}
            break;
        }
        default:{
            return state;
        }
    }
    return state;
}

export default tabsReducer;