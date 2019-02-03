import React from 'react';
import { connect } from 'react-redux';
import { modifyPlanetView } from '../actions';

class SpaceMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = { planetSelectionIndex: "0" };
    }

    componentDidMount() {
        //this.dropdownRef.current.dropDown();
    }

    planetViewChanged = (e) => {
        let newView = e.target.value;
        this.setState({ planetSelectionIndex: newView});
        this.props.modifyPlanetView(newView);
    }

    render() {
        return (
            <div className="ui menu">
                <select className="ui dropdown" value={this.state.planetSelectionIndex} onChange={this.planetViewChanged}>
                    <option value="0">Normal View</option>
                    <option value="1">Surface Minerals View</option>
                    <option value="2">Mineral Concentration View</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        zoomLevel: state.zoomLevel 
    };
};

export default connect(mapStateToProps, { modifyPlanetView } )(SpaceMenu);
