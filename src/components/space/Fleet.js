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
import { zoomLevelToMultiplier } from '../../gameUtils';

const toDegrees = (angle) => {
    return angle * (180 / Math.PI);
}

const toRadians = (angle) => {
    return angle * (Math.PI / 180);
}

class Fleet extends React.Component {
    getColor() {
        if (this.props.details.isOwned) {
            return 'blue';
        } else if(this.props.details.isFriendly) {
            return 'yellow';
        } else if(this.props.details.isEnemy) {
            return 'red';
        } else {
            return 'white';
        }
    }

    getQuantity() {
        return (
            <text
                style={{
                    fill: '#ffffff',
                    stroke: 'none',
                    fontSize: '10px',
                    fontFamily: 'Arial',
                    textAnchor: 'middle'}}
            >
                34
            </text>
        );
    }

    calculateTransformAngle() {
        let origX = this.props.details.loc.x;
        let origY = this.props.details.loc.y;

        let targetX = this.props.details.heading.x;
        let targetY = this.props.details.heading.y;

        if(origX === targetX && origY === targetY) {
            return 0;
        }

        let a = origX - targetX;
        let b = origY - targetY;

        let distanceToTarget = Math.sqrt(a*a + b*b);

        // project out an identical point in the default direction of a fleet
        let projectedX = origX - Math.cos(toRadians(-45)) * distanceToTarget;
        let projectedY = origY + Math.sin(toRadians(-45)) * distanceToTarget;

        if (projectedX === targetX && projectedY === targetY) {
            return 0;
        }

        a = projectedX - targetX;
        b = projectedY - targetY;
        let distanceFromProjectedToTarget = Math.sqrt(a*a + b*b);

        // we have 3 sides of the triangle, want the angle needed to translate
        // the point at translate X to the point at target X

        // law of cosines

        let upper = (2*(distanceToTarget * distanceToTarget)) - (distanceFromProjectedToTarget * distanceFromProjectedToTarget);
        let lower = (2 * distanceToTarget * distanceToTarget);
        let result = upper / lower;

        // adjust the angle by 90 degrees because the coordinate system is
        // flipped for Y direction
        let angle = toDegrees(Math.acos(result)) + 90;
        return angle;
    }

    render() {
        let angle = this.calculateTransformAngle();
        let xPos = (this.props.details.loc.x - 975) * this.props.zoomMultiplier;
        let yPos = (this.props.details.loc.y - 975) * this.props.zoomMultiplier;
        return (
            <g className="node" transform={ `translate(${xPos}, ${yPos})` } >
                <polygon points="10,10 10,20 20,20" transform={ `rotate (${angle}, 10, 10)` } fill={this.getColor()} />
                {this.getQuantity()}
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    let zoomMultiplier = zoomLevelToMultiplier(state.zoomLevel);

    return {
        zoomMultiplier: zoomMultiplier
    };
};

export default connect(mapStateToProps)(Fleet);
