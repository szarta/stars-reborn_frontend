/*
 *  Copyright 2019 Brandon Arrendondo
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *  DEALINGS IN THE SOFTWARE.
 */
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
    };
};

export const focusSpaceObject = (focusId) => {
    return {
        type: 'FOCUS_OBJECT',
        payload: focusId
    };
};

export const modifyZoomLevel = (zoomLevel) => {
    return {
        type: 'MODIFY_ZOOM',
        payload: zoomLevel
    };
};

export const modifyPlanetView = (planetViewType) => {
    return {
        type: 'MODIFY_PLANET_VIEW',
        payload: planetViewType
    };
};
