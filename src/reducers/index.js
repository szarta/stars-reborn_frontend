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

const selectedSpaceObjectReducer = (selected = null, action) => {
    switch (action.type) {
        case 'SELECT_OBJECT':
            return action.payload;
        default:
            return selected;
    }
};

const focusedSpaceObjectReducer = (focused = null, action) => {
    switch (action.type) {
        case 'FOCUS_OBJECT':
            return action.payload;
        default:
            return focused;
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
    selectedObject: selectedSpaceObjectReducer,
    focusedObject: focusedSpaceObjectReducer
});
