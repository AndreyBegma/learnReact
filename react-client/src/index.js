import reportWebVitals from './reportWebVitals';

import state from './redux/states';

import {reRednderEntireTree} from './render.js'


reRednderEntireTree(state)

reportWebVitals();
