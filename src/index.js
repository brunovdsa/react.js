import React from 'react';//faz o JSX funcionar
import ReactDOM from 'react-dom'; //utilizado para o ReactDOM.render
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
