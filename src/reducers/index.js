import { combineReducers } from 'redux';

const zoomLevelReducer = (zoomLevel = 100, action) => {
    switch (action.type) {
        case 'MODIFY_ZOOM':
            return action.payload;
        default:
            return 100;
    }
}

const selectedSpaceObjectReducer = (selectedId = null, action) => {
    switch (action.type) {
        case 'SELECT_OBJECT':
            return action.payload;
        default:
            return null;
    }
};

const focusedSpaceObjectReducer = (focusId = null, action) => {
    switch (action.type) {
        case 'FOCUS_OBJECT':
            return action.payload;
        default:
            return null;
    }
};

const spaceReducer = (space = null, action) => {
    switch (action.type) {
        case 'FETCH_SPACE':
            return action.payload;
        default:
            return null;
    }
}

export default combineReducers({
    space: spaceReducer,
    zoomLevel: zoomLevelReducer,
    selectedId: selectedSpaceObjectReducer,
    focusedId: focusedSpaceObjectReducer
});
