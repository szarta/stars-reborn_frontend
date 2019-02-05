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

import p001 from '../gfx/planets/p001.png';
import p002 from '../gfx/planets/p002.png';
import p003 from '../gfx/planets/p003.png';
import p004 from '../gfx/planets/p004.png';
import p005 from '../gfx/planets/p005.png';
import p007 from '../gfx/planets/p007.png';
import p009 from '../gfx/planets/p009.png';
import p010 from '../gfx/planets/p010.png';
import p011 from '../gfx/planets/p011.png';
import p012 from '../gfx/planets/p012.png';
import p013 from '../gfx/planets/p013.png';
import p014 from '../gfx/planets/p014.png';
import p015 from '../gfx/planets/p015.png';
import p016 from '../gfx/planets/p016.png';
import p017 from '../gfx/planets/p017.png';
import p018 from '../gfx/planets/p018.png';
import p019 from '../gfx/planets/p019.png';

const planetImageArray = [
    p001,
    p002,
    p003,
    p004,
    p005,
    p007,
    p009,
    p010,
    p011,
    p012,
    p013,
    p014,
    p015,
    p016,
    p017,
    p018,
    p019
];

export const getImagePath = (id) => {
    return planetImageArray[(id * 3) % planetImageArray.length];
}
