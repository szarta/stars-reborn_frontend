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

    dispatch( { type: 'FETCH_SPACE', payload: response.data } );
};

export const retrieveOwnedPlanets = () => async dispatch => {
    const response = await srFrontend.get(
        '/turn/ownedPlanets',
        {
            params: {
                gid: 1234
            }
        }
    );

    dispatch( { type: 'FETCH_OWNED_PLANETS', payload: response.data.ownedPlanets } );
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

export const modifyPlanetView = (planetViewType) => {
    return {
        type: 'MODIFY_PLANET_VIEW',
        payload: planetViewType
    }
};
