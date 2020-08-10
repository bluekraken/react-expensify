import React from "react";

export const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            I am editting the expense with a guid of {props.match.params.guid}
        </div>
    );
};