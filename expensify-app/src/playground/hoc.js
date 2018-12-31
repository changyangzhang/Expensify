import React from 'react';
import ReactDom from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>dwdw {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);

ReactDom.render(<AdminInfo isAdmin = {false} info = "dedede" />, document.getElementById('app'));