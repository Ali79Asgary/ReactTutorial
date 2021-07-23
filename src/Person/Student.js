import React from "react";

const student = (props) => {
    return (
        <div>
            <p>I'm a Student and my name is {props.name} and I'm {props.age} and my grade is {props.grade}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default student;