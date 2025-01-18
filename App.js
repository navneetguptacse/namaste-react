const heading = React.createElement(
    'h1', 
    {className: 'heading'}, 
    'Hello World!'
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading, root);