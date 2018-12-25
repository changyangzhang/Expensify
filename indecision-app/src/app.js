// import * as React from "react";

class IndecisionApp extends  React.Component{
    render() {
        const title = 'Indecision';
        const subtitle = 'dbalalala';
        const options = ['a','b','c'];
        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action/>
                <Options options = {options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component{
    render() {
        return (
            <div>
                Add
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));