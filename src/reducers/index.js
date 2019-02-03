import { combineReducers } from 'redux';

const planetViewReducer = (viewType = "0", action) => {
    switch (action.type) {
        case 'MODIFY_PLANET_VIEW':
            return action.payload;
        default:
            return viewType;
    }
}

const zoomLevelReducer = (zoomLevel = "100", action) => {
    switch (action.type) {
        case 'MODIFY_ZOOM':
            return action.payload;
        default:
            return zoomLevel;
    }
}

const selectedSpaceObjectReducer = (selectedId = null, action) => {
    switch (action.type) {
        case 'SELECT_OBJECT':
            return action.payload;
        default:
            return selectedId;
    }
};

const focusedSpaceObjectReducer = (focusId = null, action) => {
    switch (action.type) {
        case 'FOCUS_OBJECT':
            return action.payload;
        default:
            return focusId;
    }
};

const spaceReducer = (space = null, action) => {
    switch (action.type) {
        case 'FETCH_SPACE':
            return action.payload;
        default:
            return space;
    }
}

export default combineReducers({
    space: spaceReducer,
    planetView: planetViewReducer,
    zoomLevel: zoomLevelReducer,
    selectedId: selectedSpaceObjectReducer,
    focusedId: focusedSpaceObjectReducer
});
