import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import locales from "numeral/locales";

// Return the expense list item
export default ( { guid, description, amount, createdOn } ) => {
    numeral.locale("en-GB");
    return (
        <div>
            <Link to={`/edit/${guid}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                {numeral(amount / 100).format("$0,0.00")}
                 -
                {moment(createdOn).format("Do MMMM, YYYY")}
            </p>
        </div>
    );
};