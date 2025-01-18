## Message
In the previous commit, we built a simple web page using HTML code that prints `Hello World!`.

Now, we will achieve the same result, printing the `Hello World!` text on the web page, using only JavaScript under the `root` id.

As we already know, every browser has its own JavaScript engine, capable of running HTML and JavaScript code easily.

However, browsers are not capable of running React code natively until you configure React manually.

There are several ways to configure React so that the browser can understand it.

One way is by using [React CDN links](https://legacy.reactjs.org/docs/cdn-links.html), which can be added to our code to connect the browser to the network where the React library is hosted, enabling the browser to understand React code natively.

```js
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
Let's write the same `Hello World!` message on the web page using React.

## Assignment

Create a complex HTML element using React inside `root` id element. The element should include a heading, a paragraph, and an unordered list with three list items.

```html
    <div>
        <h1 class="heading">Namaste React 🙏</h1>
        <p>This is a paragraph inside a complex element.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>
```

### Answer

```javascript
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
```
