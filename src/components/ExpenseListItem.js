import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import locales from "numeral/locales";

// Return the expense list item
export default ( { guid, description, amount, createdOn } ) => {
    numeral.locale("en-GB");
    return (
        <Link className="list-item" to={`/edit/${guid}`}>
            <div>
                <h3 className="list-item__description">{description}</h3>
                <span className="list-item__date">{moment(createdOn).format("Do MMMM, YYYY")}</span>
            </div>
            <h3 className="list-item__amount">{numeral(amount / 100).format("$0,0.00")}</h3>
        </Link>
    );
};