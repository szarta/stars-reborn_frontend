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

const spaceReducer = () => {
    return ({
        bound: {
            xMax: 400,
            yMax: 400
        },
        planets: [
            {
                id: 0,
                name: 'Mohlodi',
                loc: {
                    x: 120,
                    y: 50
                },
                seenBefore: false
            },
            {
                id: 1,
                name: 'Strange World',
                loc: {
                    x: 300,
                    y: 75
                },
                seenBefore: true,
                currentData: true,
                relatedStarbase: true,
                population: 30000,
                currentHabVal: 75,
                potentialHabVal: 100,
                relatedOwnedFleets: [
                    'Santa Maria #2',
                    'Long Range Scout #3'
                ],
                relatedFriendlyFleets: [
                    'Some Fleet #23'
                ],
                relatedEnemyFleets: [
                    'Bombing Crew #40'
                ]
            }
        ]
    });
};

export default combineReducers({
    space: spaceReducer,
    zoomLevel: zoomLevelReducer,
    selectedId: selectedSpaceObjectReducer,
    focusedId: focusedSpaceObjectReducer
});
