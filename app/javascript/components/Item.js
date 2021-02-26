import React from 'react'
export default (props) => {
    const {item} = props;
    const {name, body, id} = item;
    return (
        <div>
            <h1> {name} </h1>

            <h2>{body}</h2>
            <h5>item id:{id}</h5>
            <a href={`/departments/${item.department_id}`}>back</a>
            <a href={`/departments/${item.department_id}`}>delete</a>
        </div>
    )
}