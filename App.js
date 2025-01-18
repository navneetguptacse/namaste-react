const element = (
    <div>
        <h1 className="heading">Namaste React 🙏</h1>
        <p>This is a paragraph inside a complex element.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);