class Visible extends React.Component {
    constructor(props) {
        super(props);
        this.hideOrShow = this.hideOrShow.bind(this);
        this.state = {
            show : false
        };
    }
    hideOrShow() {
        this.setState((prevState) => {
            return {
                show : !prevState.show
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Title</h1>
                         <button onClick = {this.hideOrShow}> {this.state.show ? 'Hide' : 'Show'} </button>
                        {this.state.show && (
                            <div><p> Some Details</p></div>)}
            </div>);
    }
}



ReactDOM.render(<Visible/>, document.getElementById('app'));
// const appRoot = document.getElementById('app');
// const app = {
//     title: 'Visibility Toggle',
//     detail: 'some details',
//     show: false
// };
//
// const reSet = () => {
//     app.show = !app.show;
//     appRender();
// }
//
// const appRender = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick = {reSet}> {app.show ? 'Hide' : 'Show'} </button>
//             {app.show && (
//                 <div>
//                     <p> Some Details</p>
//                 </div>
//             )}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot)
// }
//
// appRender();