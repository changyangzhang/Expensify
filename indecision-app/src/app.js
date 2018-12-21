console.log('APP is running!')
const appRoot = document.getElementById('app');
const app = {
    title: 'Indecision App',
    subtitle: 'Put',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        appRender();
    }
}

const reSet = () => {
        app.options = [];
        appRender();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()) * app.options.length;
    const option = app.options[randomNum];
};

const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick = {reSet}> Reset </button>
            <button disabled = {app.options.length == 0} onClick= {onMakeDecision}>What should I do ?</button>
            <ol>
            {
                app.options.map((option) => <li key = {option}>Option : {option}</li>)
            }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type= "text" name = "option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot)
}

appRender();