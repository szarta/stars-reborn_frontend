import srFrontend from '../apis/srFrontend';


export const retrieveSpace = () => async dispatch => {
    const response = await srFrontend.get(
        '/turn/space',
        {
            params: {
                gid: 1234
            }
        }
    );

    console.log(response.data);
    dispatch( { type: 'FETCH_SPACE', payload: response.data } );
};

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
