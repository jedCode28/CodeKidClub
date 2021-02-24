import React from 'react'

const Department = (props) => {
  const {department} = props

  const renderDepartments = () => {
    return departments.map(department => {
      return
    return (
      <div>
        <div className='department-container'>
          <h1>{name} department id is {id}</h1>
          <a href='/'>back to departments</a>
        </div>
      </div>
    )

  })

}

export default Department