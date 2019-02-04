import React from 'react';
import Universe from './space/Universe';
import SpaceMenu from './SpaceMenu';
import PlanetPicture from './PlanetPicture';

class App extends React.Component {
    render() {
        return (
        <div className="ui container">
            <div className="ui two column centered grid">
                <div className="row">
                    <div className="column">
                        <PlanetPicture />
                    </div>
                    <div className="column">
                        <SpaceMenu />
                        <Universe />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
