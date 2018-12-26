// import * as React from "react";

class IndecisionApp extends  React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.state = {
            options : []
        }
    }
    handleDelete () {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    handlePick () {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option);
    }
    handleAdd(option) {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) =>{
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'balalala';
        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action handlePick = {this.handlePick} hasOptions = {this.state.options.length > 0}/>
                <Options handleDelete = {this.handleDelete} options = {this.state.options}/>
                <AddOption handleAdd = {this.handleAdd}/>
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
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render() {
        return (
            <div>
                <button onClick={this.props.handleDelete}>Remove All</button>
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
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAdd(option);

        this.setState(() => {
            return {error};
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));