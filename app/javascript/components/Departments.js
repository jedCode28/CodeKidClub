import React from 'react'

const Departments = (props) => {
    const { departments } = props

    const renderDepartments = () => {
        return departments.map(department => {
            return(
            <div className='department_container'>
                <h1>{department.name}</h1>
                <p>{department.body}</p>
                <a href={`/departments/${department.id}`}>View Department</a>
            </div>
        )
    })
  }
    return(

        <div className='departments_container'>
            <h1> Departments </h1>
            <a href='/departments/new'>New Department</a>
            {renderDepartments()}
        </div>
        )


}
export default Departments;