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
import React from 'react';
import { connect } from 'react-redux';
import { retrieveOwnedPlanets } from '../actions';
import { getImagePath } from './PlanetImages.js';


class PlanetPicture extends React.Component {
    componentDidMount() {
        this.props.retrieveOwnedPlanets();
    }

    render() {
        if (!this.props.planets) {
            return null;
        }

        if (this.props.focused) {
            if ('planet' in this.props.focused) {
                let result = this.props.planets.filter(planet => {
                    return planet.id === this.props.focused.planet;
                });

                if (result.length === 1) {
                    let planet_name = result[0].name;
                    return (
                        <div className="ui card">
                            <div className="ui center aligned header">
                                {planet_name}
                            </div>
                            <div className="content">
                                <div className="ui centered image" style={{maxWidth:'100px'}}>
                                    <img
                                        src={getImagePath(result[0].id)}
                                        alt="The planet"/>
                                </div>
                                <div className="ui vertical buttons">
                                    <div className="ui basic button">Previous</div>
                                    <div className="ui basic button">Next</div>
                                </div>
                            </div>
                        </div>
                    );
                }
            }
        }

        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        planets: state.ownedPlanets,
        focused: state.focusedObject
    };
};

export default connect(mapStateToProps, { retrieveOwnedPlanets })(PlanetPicture);
