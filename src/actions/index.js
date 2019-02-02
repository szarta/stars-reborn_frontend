export const selectSpaceObject = (selectedId) => {
    return {
        type: 'SELECT_OBJECT',
        payload: selectedId
    }
};

export const focusSpaceObject = (focusId) => {
    return {
        type: 'FOCUS_OBJECT',
        payload: focusId
    }
};

export const modifyZoomLevel = (zoomLevel) => {
    return {
        type: 'MODIFY_ZOOM',
        payload: zoomLevel
    }
};
