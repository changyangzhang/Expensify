console.log('APP is running!')

const app = {
    title: "Changyang",
    subtitle: "abc",
    options:['One','two']
};

const template = (
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

const userName = "Chnagyang"
const template2 = (
    <div>
        <h1>{userName}</h1>
        <p>Age:27</p>
        <p>Location:Stockholm</p>
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

const multipliers = {
    numbers: [1,2,3],
    multiplyBy: 8,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}
console.log(multipliers.multiply());