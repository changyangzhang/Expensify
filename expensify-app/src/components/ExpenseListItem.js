import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({id, description, amount, createdAt }) => (
        <Link to={`/edit/${id}`} className="list-item">
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item-__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
            <div>
                <h3>{numeral(amount/100).format('0,0.00') + ' kr'}</h3>
            </div>
        </Link>
);

export default ExpenseListItem;