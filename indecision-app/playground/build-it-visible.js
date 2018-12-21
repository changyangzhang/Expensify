const appRoot = document.getElementById('app');
const app = {
    title: 'Visibility Toggle',
    detail: 'some details',
    show: false
};

const reSet = () => {
    app.show = !app.show;
    appRender();
}

const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick = {reSet}> {app.show ? 'Hide' : 'Show'} </button>
            {app.show && (
                <div>
                    <p> Some Details</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(template, appRoot)
}

appRender();