import React from 'react'

const Departments = (props) => {
    const {name, body} = props

    const renderDepartments = () => {
        return(
            <div>
                <h1>{name}</h1>
                <p>{body}</p>
            </div>
        )
    }
return(

        <div>
            <h1> Departments </h1>
            {renderDepartments()}
        </div>
    )

}

export default Departments;