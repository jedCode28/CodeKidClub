// import React from 'react'

// const Department = (props) => {
//   const {department} = props

//   const renderDepartments = () => {
//     return department.map(department => {
      
//     return (
//       <div>
//         <div className='department-container'>
//           <h1>{department.name} department id is {department.id}</h1>
//           <a href='/'>back to departments</a>
//         </div>
//       </div>
//     )
//     }
// )}
//   return renderDepartments (
//       <>
//       <h1>Departments</h1>
//       </>
//   )


// }

// export default Department;

import React from 'react';
export default (props) => {

  const {name, body} = props.department;
  return (
    <>
      <h1>Departmentjs</h1>
      <h3>{name}</h3>
      <p>{body}</p>
      <a href="/">back</a>
    </>
  );
}






















