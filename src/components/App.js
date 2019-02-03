import React from 'react';
import Universe from './space/Universe';
import SpaceMenu from './SpaceMenu';

class App extends React.Component {
    render() {
        return (
        <div className="ui container">
            <div>
                <SpaceMenu />
            </div>
           <div>
                <Universe />
            </div>
        </div>
        );
    }
}

export default App;
