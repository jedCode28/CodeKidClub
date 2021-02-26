

import React from 'react';
 const Department = (props) => {

  const {department, items} = props;
  const {name, body} = department;
  const renderItems = () => {
  return items.map (item => {
    return ( 
      <div className='department_container'>
        <h1>{item.name}</h1>
        <h2>{item.body}</h2>
        <a href={`/departments/${department.id}/items/${item.id}`}>View Item</a>
      </div>
    )
        })
      }
  return (
    <div className='departments_container'>
      <h1>Department</h1>
      <h3>{name}</h3>
      <p>{body}</p>
      <a href={`/departments/${department.id}/items/new/`}>New Item</a>
      <a href="/">back</a>
      {renderItems()}
    </div>
    
  );
}
export default Department;






















