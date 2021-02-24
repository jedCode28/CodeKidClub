import React from 'react'

const Department = (props) => {
  const {departments} = props

  const renderDepartments = () => {
    return departments.map(department => {
      
    return (
      <div>
        <div className='department-container'>
          <h1>{department.name} department id is {department.id}</h1>
          <a href='/'>back to departments</a>
        </div>
      </div>
    )
    }
)}
  return renderDepartments (
      <>
      <h1>Departments</h1>
      </>
  )


}

export default Department;