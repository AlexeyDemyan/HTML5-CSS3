import React from 'react';
import ReactDOM from 'react-dom';
 
 console.log("Privet pidor");
 console.log('It works!');
 
import { script } from './script';

script();
console.log('А это index.js');

const element = React.createElement(
   'h1',
   { className: "element" },
   'Кажется, мы подключили React',
);

ReactDOM.render(
    element,
    document.getElementById('root'),
 );

const Component = (props) => <h1 className="element">{props.content}</h1>;

ReactDOM.render(
    <Component content={ content } />,
    document.getElementById('root'),
 );

 let messages = ['Привет', 'Как дела?'];

 const MessageComponent = (props) => <div>{props.text}</div>;
 
 const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message } />);
 };
 
 ReactDOM.render(
    <MessageField messages={ messages } />,
    document.getElementById('root'),
 );