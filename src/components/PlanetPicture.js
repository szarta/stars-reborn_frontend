import React from 'react';
import { connect } from 'react-redux';

class PlanetPicture extends React.Component {
    render() {
        return (
            <div className="ui card">
                <div className="header">PlanetName</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.focusedObject
    };
};

export default connect(mapStateToProps)(PlanetPicture);
