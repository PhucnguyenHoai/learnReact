import React from "react";

function formatDate(date) {
    return date.toLocaleDateString();
}

function User(pros) {
    return (
        <div>
            <p>Name: {pros.userq.name}</p>
            <p>Type: {pros.userq.type}</p>
        </div>
    );
}

function Comment(pros) {
    return (
        <div className="article">
            <div className="content">
                <User userq={pros.authora} />
            </div>
            <div className="date">
                {formatDate(pros.date)}
            </div>
        </div>
    );
}

export default Comment