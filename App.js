import React from "react";
import ReactDOM from 'react-dom';

const element = React.createElement(
    'div',
    null,
    React.createElement('h1', { className: 'heading' }, 'Namaste React 🙏'),
    React.createElement('p', null, 'This is a paragraph inside a complex element.'),
    React.createElement(
        'ul',
        null,
        React.createElement('li', null, 'Item 1'),
        React.createElement('li', null, 'Item 2'),
        React.createElement('li', null, 'Item 3')
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);