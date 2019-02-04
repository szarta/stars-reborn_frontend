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
export const PlanetViewEnum = {
    NORMAL: 0,
    SURFACE_MINERALS: 2,
    MINERAL_CONCENTRATION: 3,
    PLANET_VALUE: 4,
    POPULATION: 5,
    NO_INFO: 6,
};

export const zoomLevelToMultiplier = (level) => {
    let zoomMultiplier;
    switch(level) {
        case "25":
            zoomMultiplier = 0.25;
            break;

        case "38":
            zoomMultiplier = 0.38;
            break;

        case "50":
            zoomMultiplier = 0.50;
            break;

        case "100":
            zoomMultiplier = 1.0;
            break;

        case "125":
            zoomMultiplier = 1.25;
            break;

        case "150":
            zoomMultiplier = 1.5;
            break;

        case "200":
            zoomMultiplier = 2.0;
            break;

        case "400":
            zoomMultiplier = 4.0;
            break;

        default:
            zoomMultiplier = 1.0;
    }

    return zoomMultiplier;
}
