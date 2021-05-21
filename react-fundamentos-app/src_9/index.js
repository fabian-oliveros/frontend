import React from 'react';
import ReactDOM from 'react-dom';



///hoja de estilos


import './index.css'

import ContadorApp from './ContadorApp'

const deviRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valor_contador ={0}/>, deviRoot)