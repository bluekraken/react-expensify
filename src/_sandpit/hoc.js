import React from 'react';
import ReactDOM from 'react-dom';

const Patient = (props) => (
    <div>
        <h1>Patient</h1>
        <p>The patient name is: {props.isAdmin ? props.patient : '**********'}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Private & Confidential</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view this page!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Patient);
const AuthInfo = requireAuthentication(Patient);

ReactDOM.render(<AdminInfo isAdmin={true} patient="Andrew Hearse" />, document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAuthenticated={false} patient="Andrew Hearse" />, document.getElementById('app'));