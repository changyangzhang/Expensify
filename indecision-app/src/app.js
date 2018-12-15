console.log('APP is running!')

var app = {
    title: "Changyang",
    subtitle: "abc",
    options:['One','two']
};

var template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>app.subtitle</p>}
        <p>{app.options.length > 0 ? "here is you options" : "No options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var userName = "Chnagyang"
var template2 = (
    <div>
        <h1>{userName}</h1>
        <p>Age:27</p>
        <p>Location:Stockholm</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);