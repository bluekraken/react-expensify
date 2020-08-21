import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// Return the expense list item
export default ( { guid, description, amount, createdOn } ) => (
    <div>
        <p>
            <Link to={`/edit/${guid}`}>
                {description}
            </Link>
            : {amount} - {moment(createdOn).format("DD/MM/YYYY")}
        </p>
    </div>
);