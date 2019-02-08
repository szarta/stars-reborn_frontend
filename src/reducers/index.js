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
import { combineReducers } from 'redux';

const planetViewReducer = (viewType = '0', action) => {
    switch (action.type) {
        case 'MODIFY_PLANET_VIEW':
            return action.payload;
        default:
            return viewType;
    }
};

const zoomLevelReducer = (zoomLevel = '100', action) => {
    switch (action.type) {
        case 'MODIFY_ZOOM':
            return action.payload;
        default:
            return zoomLevel;
    }
};

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
};

const ownedPlanetsReducer = (planets = null, action) => {
    switch (action.type) {
        case 'FETCH_OWNED_PLANETS':
            return action.payload;
        default:
            return planets;
    }
};

const showPlanetNamesReducer = (names = true, action) => {
    switch (action.type) {
        case 'MODIFY_SHOW_PLANET_NAMES':
            return action.payload;
        default:
            return names;
    }
};

export default combineReducers({
    space: spaceReducer,
    ownedPlanets: ownedPlanetsReducer,
    planetView: planetViewReducer,
    zoomLevel: zoomLevelReducer,
    selectedObject: selectedSpaceObjectReducer,
    focusedObject: focusedSpaceObjectReducer,
    showPlanetNames: showPlanetNamesReducer
});
