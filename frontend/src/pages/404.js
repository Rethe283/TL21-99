import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>404 Not Found</h1>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Take Me Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;