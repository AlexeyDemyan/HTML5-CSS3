import React from 'react';
import ReactDOM from 'react-dom';

console.log('It works!');

import { script } from './script';
script();

console.log('А это index.js. Ну теперь уже jsx. Если эта строка не показывается, значит я конкретно набедокурил'); 



let messages = ['Webpack я конечно настроил, но прям поседел за это время...', 'Естественно, я влетел в проблему несоответствия версий, и пришлось откатываться...', 'Думаю пока делать через create-react-app, попозже разберусь'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);
