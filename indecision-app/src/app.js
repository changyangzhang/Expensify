console.log('APP is running!')

var template = (
    <div>
        <h1>Hello</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Changyang</h1>
        <p>Age:27</p>
        <p>Location:Stockholm</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);